import os
import h5py
from sklearn.model_selection import train_test_split
from tensorflow.keras.utils import to_categorical
import pickle
import multiprocessing as mp
import numpy as np
import pandas as pd
import itertools
import copy
from sklearn.utils import shuffle
from scipy.interpolate import interp1d

from astrorapid import helpers
from astrorapid.get_training_data import get_data

# fix random seed for reproducibility
np.random.seed(42)


class PrepareArrays(object):
    def __init__(self, passbands=('g', 'r'), contextual_info=('redshift',), nobs=50, mintime=-70, maxtime=80,
                 timestep=3.0):
        self.passbands = passbands
        self.contextual_info = contextual_info
        self.npassbands = len(passbands)
        self.nfeatures = self.npassbands + len(self.contextual_info)
        self.nobs = nobs
        self.timestep = timestep
        self.mintime = mintime
        self.maxtime = maxtime

    def make_cuts(self, data, i, deleterows, b, redshift=None, class_num=None, bcut=True, zcut=0.5, ignore_classes=(),
                  pre_trigger=True):
        deleted = False
        try:
            time = data[data['passband']=='r']['time'].data
        except KeyError:
            print("No r band data. passbands")
            deleterows.append(i)
            deleted = True
            return deleterows, deleted

        if len(data) < 4:
            print("Less than 4 epochs. nobs = {}".format(len(data)))
            deleterows.append(i)
            deleted = True
        elif pre_trigger and len(time[time < 0]) < 3:
            print("Less than 3 points in the r band pre trigger", len(time[time < 0]))
            deleterows.append(i)
            deleted = True
        elif bcut and abs(b) < 15:
            print("In galactic plane. b = {}".format(b))
            deleterows.append(i)
            deleted = True
        elif zcut is not None and redshift is not None and (redshift > self.zcut or redshift == 0):
            print("Redshift cut. z = {}".format(redshift))
            deleterows.append(i)
            deleted = True
        elif class_num in ignore_classes:
            print("Not including class:", class_num)
            deleterows.append(i)
            deleted = True

        return deleterows, deleted

    def get_min_max_time(self, data):
        # Get min and max times for tinterp
        mintimes = []
        maxtimes = []
        for j, pb in enumerate(self.passbands):
            pbmask = data['passband']==pb
            time = data[pbmask]['time'].data
            try:
                mintimes.append(time.min())
                maxtimes.append(time.max())
            except ValueError:
                print("No data for passband: ", pb)
        mintime = min(mintimes)
        maxtime = max(maxtimes) + self.timestep

        return mintime, maxtime

    def get_t_interp(self, data):
        mintime, maxtime = self.get_min_max_time(data)

        tinterp = np.arange(mintime, maxtime, step=self.timestep)
        len_t = len(tinterp)
        if len_t > self.nobs:
            tinterp = tinterp[(tinterp >= self.mintime)]
            len_t = len(tinterp)
            if len_t > self.nobs:
                tinterp = tinterp[:-(len_t - self.nobs)]
                len_t = len(tinterp)
        return tinterp, len_t

    def update_X(self, X, i, data, tinterp, len_t, objid, contextual_info, meta_data):
        for j, pb in enumerate(self.passbands):
            # Drop infinite or nan values in any row
            data.remove_rows(np.where(~np.isfinite(data['time']))[0])
            data.remove_rows(np.where(~np.isfinite(data['flux']))[0])
            data.remove_rows(np.where(~np.isfinite(data['fluxErr']))[0])

            # Get data
            pbmask = data['passband']==pb
            time = data[pbmask]['time'].data
            flux = data[pbmask]['flux'].data
            fluxerr = data[pbmask]['fluxErr'].data
            photflag = data[pbmask]['photflag'].data

            # Mask out times outside of mintime and maxtime
            timemask = (time > self.mintime) & (time < self.maxtime)
            time = time[timemask]
            flux = flux[timemask]
            fluxerr = fluxerr[timemask]
            photflag = photflag[timemask]

            n = len(flux)  # Get vector length (could be less than nobs)

            if n > 1:
                # if flux[-1] > flux[-2]:  # If last values are increasing, then set fill_values to zero
                #     f = interp1d(time, flux, kind='linear', bounds_error=False, fill_value=0.)
                # else:
                #     f = interp1d(time, flux, kind='linear', bounds_error=False,
                #                  fill_value='extrapolate')  # extrapolate until all passbands finished.
                f = interp1d(time, flux, kind='linear', bounds_error=False, fill_value=0.)

                fluxinterp = f(tinterp)
                fluxinterp = np.nan_to_num(fluxinterp)
                fluxinterp = fluxinterp.clip(min=0)
                fluxerrinterp = np.zeros(len_t)

                for interp_idx, fluxinterp_val in enumerate(fluxinterp):
                    if fluxinterp_val == 0.:
                        fluxerrinterp[interp_idx] = 0
                    else:
                        nearest_idx = helpers.find_nearest(time, tinterp[interp_idx])
                        fluxerrinterp[interp_idx] = fluxerr[nearest_idx]

                X[i][j][0:len_t] = fluxinterp
                # X[i][j * 2 + 1][0:len_t] = fluxerrinterp

        # Add contextual information
        for jj, c_info in enumerate(contextual_info, 1):
            X[i][j + jj][0:len_t] = meta_data[c_info] * np.ones(len_t)

        return X


class PrepareInputArrays(PrepareArrays):
    def __init__(self, passbands=('g', 'r'), contextual_info=('redshift',), bcut=True, zcut=None,
                 nobs=50, mintime=-70, maxtime=80, timestep=3.0):
        PrepareArrays.__init__(self, passbands, contextual_info, nobs, mintime, maxtime, timestep)
        self.bcut = bcut
        self.zcut = zcut

    def prepare_input_arrays(self, lightcurves):
        nobjects = len(lightcurves)

        X = np.zeros(shape=(nobjects, self.nfeatures, self.nobs))
        timesX = np.zeros(shape=(nobjects, self.nobs))
        objids_list = []
        orig_lc = []
        deleterows = []
        trigger_mjds = []

        for i, (objid, data) in enumerate(lightcurves.items()):
            print("Preparing light curve {} of {}".format(i, nobjects))

            redshift = data.meta['redshift']
            b = data.meta['b']
            trigger_mjd = data.meta['trigger_mjd']

            # Make cuts
            deleterows, deleted = self.make_cuts(data, i, deleterows, b, redshift, class_num=None, bcut=self.bcut,
                                                 zcut=self.zcut, pre_trigger=False)
            if deleted:
                continue

            tinterp, len_t = self.get_t_interp(data)
            timesX[i][0:len_t] = tinterp
            orig_lc.append(data)
            objids_list.append(objid)
            trigger_mjds.append(trigger_mjd)
            X = self.update_X(X, i, data, tinterp, len_t, objid, self.contextual_info, data.meta)

        deleterows = np.array(deleterows)
        X = np.delete(X, deleterows, axis=0)
        timesX = np.delete(timesX, deleterows, axis=0)

        # Correct shape for keras is (N_objects, N_timesteps, N_passbands) (where N_timesteps is lookback time)
        X = X.swapaxes(2, 1)

        return X, orig_lc, timesX, objids_list, trigger_mjds


class PrepareTrainingSetArrays(PrepareArrays):
    def __init__(self, passbands=('g', 'r'), contextual_info=('redshift',), nobs=50, mintime=-70, maxtime=80,
                 timestep=3.0, reread=False, bcut=True, zcut=None, ignore_classes=(), class_name_map=None,
                 nchunks=10000,  training_set_dir='data/training_set_files', data_dir='data/ZTF_20190512/',
                 save_dir='data/saved_light_curves/', get_data_func=None):
        PrepareArrays.__init__(self, passbands, contextual_info, nobs, mintime, maxtime, timestep)
        self.reread = reread
        self.bcut = bcut
        self.zcut = zcut
        self.ignore_classes = ignore_classes
        self.nchunks = nchunks
        self.training_set_dir = training_set_dir
        self.data_dir = data_dir
        self.save_dir = save_dir
        self.light_curves = {}
        self.get_data_func = get_data_func
        if 'redshift' in contextual_info:
            self.known_redshift = True
        else:
            self.known_redshift = False
        if class_name_map is None:
            self.class_name_map = helpers.get_sntypes()
        else:
            self.class_name_map = class_name_map

        if not os.path.exists(self.training_set_dir):
            os.makedirs(self.training_set_dir)

    def get_light_curves(self, class_nums=(1,), nprocesses=1):
        light_curves = {}

        for class_num in class_nums:
            lcs = get_data(self.get_data_func, class_num, self.data_dir, self.save_dir, self.passbands,
                           self.known_redshift, nprocesses, self.reread)
            light_curves.update(lcs)

        return light_curves

    def prepare_training_set_arrays(self, otherchange='', class_nums=(1,), nprocesses=1, train_size=0.6):
        savepath = os.path.join(self.training_set_dir,
                                "X_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                         self.bcut, self.ignore_classes))
        print(savepath)
        if self.reread is True or not os.path.isfile(savepath):
            self.light_curves = self.get_light_curves(class_nums, nprocesses)

            objids = list(set(self.light_curves.keys()))
            nobjects = len(objids)

            # Store data labels (y) and 'r' band data (X). Use memory mapping because input file is very large.
            labels = np.empty(shape=nobjects, dtype=object)
            y = np.zeros(shape=(nobjects, self.nobs), dtype=object)
            X = np.memmap(os.path.join(self.training_set_dir, 'X_lc_data.dat'), dtype=np.float32, mode='w+',
                          shape=(nobjects, self.nfeatures, self.nobs))  # 4+len(self.contextual_info), 100))
            X[:] = np.zeros(shape=(nobjects, self.nfeatures, self.nobs))
            timesX = np.zeros(shape=(nobjects, self.nobs))
            objids_list = []
            orig_lc = []

            # Chunk before multiprocessing
            multi_objids = np.array_split(objids, self.nchunks)

            # Store light curves into X (fluxes) and y (labels)
            if nprocesses == 1:
                outputs = []
                for arg in multi_objids:
                    outputs.append(self.multi_read_obj(arg))
            else:
                pool = mp.Pool(nprocesses)
                results = pool.map_async(self.multi_read_obj, multi_objids) ##
                pool.close()
                pool.join()
                outputs = results.get()

            sum_deleterows = 0
            startidx = 0
            num_outputs = len(outputs)
            print('combining results...')
            for i, output in enumerate(outputs):
                labels_part, y_part, X_part, timesX_part, objids_list_part, orig_lc_part, num_deleterows_part, num_objects_part = output
                endidx = startidx + num_objects_part
                labels[startidx:endidx] = labels_part
                y[startidx:endidx] = y_part
                X[startidx:endidx] = X_part
                timesX[startidx:endidx] = timesX_part
                objids_list.extend(objids_list_part)
                orig_lc.extend(orig_lc_part)
                startidx += num_objects_part
                sum_deleterows += num_deleterows_part

            deleterows = np.array(np.arange(nobjects - sum_deleterows, nobjects))
            X = np.delete(X, deleterows, axis=0)
            y = np.delete(y, deleterows, axis=0)
            labels = np.delete(labels, deleterows, axis=0)
            timesX = np.delete(timesX, deleterows, axis=0)

            np.save(os.path.join(self.training_set_dir,
                                 "X_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                    self.bcut, self.ignore_classes)), X)
            np.save(os.path.join(self.training_set_dir,
                                 "y_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                    self.bcut, self.ignore_classes)), y,
                    allow_pickle=True)
            np.save(os.path.join(self.training_set_dir,
                                 "labels_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                         self.bcut, self.ignore_classes)), labels,
                    allow_pickle=True)
            np.save(os.path.join(self.training_set_dir,
                                 "tinterp_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                          self.bcut, self.ignore_classes)), timesX)
            np.save(os.path.join(self.training_set_dir,
                                 "objids_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                         self.bcut, self.ignore_classes)), objids_list,
                    allow_pickle=True)
            with open(os.path.join(self.training_set_dir,
                                   "origlc_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                           self.bcut, self.ignore_classes)),
                      'wb') as f:
                pickle.dump(orig_lc, f)

        else:
            X = np.load(os.path.join(self.training_set_dir,
                                     "X_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                        self.bcut, self.ignore_classes)), mmap_mode='r')
            y = np.load(os.path.join(self.training_set_dir,
                                     "y_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                        self.bcut, self.ignore_classes)),
                        allow_pickle=True)
            labels = np.load(os.path.join(self.training_set_dir,
                                          "labels_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info,
                                                                                  self.zcut, self.bcut,
                                                                                  self.ignore_classes)),
                             allow_pickle=True)
            timesX = np.load(os.path.join(self.training_set_dir,
                                          "tinterp_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info,
                                                                                   self.zcut, self.bcut,
                                                                                   self.ignore_classes)))
            objids_list = np.load(os.path.join(self.training_set_dir,
                                               "objids_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange,
                                                                                       self.contextual_info, self.zcut,
                                                                                       self.bcut, self.ignore_classes)),
                                  allow_pickle=True)
            with open(os.path.join(self.training_set_dir,
                                   "origlc_{}ci{}_z{}_b{}_ig{}.npy".format(otherchange, self.contextual_info, self.zcut,
                                                                           self.bcut, self.ignore_classes)), 'rb') as f:
                orig_lc = pickle.load(f)

        classes = sorted(list(set(labels)))

        # Count nobjects per class
        for c in classes:
            nobs = len(X[labels == c])
            print(c, nobs)

        # Use class numbers 1,2,3... instead of 1, 3, 13 etc.
        y_indexes = np.copy(y)
        for i, c in enumerate(classes):
            y_indexes[y == c] = i + 1
        y = y_indexes

        y = to_categorical(y)

        # Correct shape for keras is (N_objects, N_timesteps, N_passbands) (where N_timesteps is lookback time)
        X = X.swapaxes(2, 1)

        # #NORMALISE
        # X = X.copy()
        # for i in range(len(X)):
        #     for pbidx in range(2):
        #         minX = X[i, :, pbidx].min(axis=0)
        #         maxX = X[i, :, pbidx].max(axis=0)
        #         X[i, :, pbidx] = (X[i, :, pbidx] - minX) / (maxX - minX)
        #         # if (maxX - minX) != 0:
        #         #     mask.append(i)
        #         #     break
        # finitemask = ~np.any(np.any(~np.isfinite(X), axis=1), axis=1)
        # X = X[finitemask]
        # y = y[finitemask]
        # timesX = timesX[finitemask]
        # objids_list = objids_list[finitemask]
        # orig_lc = list(itertools.compress(orig_lc, finitemask))
        # labels = labels[finitemask]

        print("Shuffling")
        X, y, labels, timesX, orig_lc, objids_list = shuffle(X, y, labels, timesX, orig_lc, objids_list)
        print("Done shuffling")

        X_train, X_test, y_train, y_test, labels_train, labels_test, timesX_train, timesX_test, orig_lc_train, \
        orig_lc_test, objids_train, objids_test = train_test_split(
            X, y, labels, timesX, orig_lc, objids_list, train_size=train_size, shuffle=False, random_state=42)

        def augment_crop_lightcurves(X_local, y_local, labels_local, timesX_local, orig_lc_local, objids_local):
            X_local = copy.copy(X_local)
            y_local = copy.copy(y_local)
            labels_local = copy.copy(labels_local)
            timesX_local = copy.copy(timesX_local)
            orig_lc_local = copy.copy(orig_lc_local)
            objids_local = copy.copy(objids_local)

            newX = np.zeros(X_local.shape)
            newy = np.zeros(y_local.shape)
            lenX = len(X_local)
            for i in range(lenX):
                if i % 1000 == 0:
                    print(f"new {i} of {lenX}")
                mask = timesX_local[i] >= 0
                nmask = sum(mask)
                newX[i][:nmask] = X_local[i][mask]
                newy[i][:nmask] = y_local[i][mask]

            print("Concatenating")
            X_local = np.concatenate((X_local, newX))
            y_local = np.concatenate((y_local, newy))
            labels_local = np.concatenate((labels_local, labels_local))
            timesX_local = np.concatenate((timesX_local, timesX_local))
            orig_lc_local = orig_lc_local * 2
            objids_local = np.concatenate((objids_local, objids_local))

            return X_local, y_local, labels_local, timesX_local, orig_lc_local, objids_local

        X_train, y_train, labels_train, timesX_train, orig_lc_train, objids_train = augment_crop_lightcurves(X_train, y_train, labels_train, timesX_train, orig_lc_train, objids_train)
        X_test, y_test, labels_test, timesX_test, orig_lc_test, objids_test = augment_crop_lightcurves(X_test, y_test, labels_test, timesX_test, orig_lc_test, objids_test)

        X_train, y_train, labels_train, timesX_train, orig_lc_train, objids_train = shuffle(X_train, y_train, labels_train, timesX_train, orig_lc_train, objids_train)

        counts = np.unique(labels_train, return_counts=True)[-1]
        class_weights = max(counts) / counts
        class_weights = dict(zip(range(len(counts)), class_weights))
        print("Class weights:", class_weights)

        # Sample weights
        l_train_indexes = np.copy(labels_train)
        for i, c in enumerate(classes):
            l_train_indexes[l_train_indexes == c] = i
        sample_weights = np.zeros(len(l_train_indexes))
        for key, val in class_weights.items():
            sample_weights[l_train_indexes == key] = val

        return X_train, X_test, y_train, y_test, labels_train, labels_test, classes, class_weights, \
               sample_weights, timesX_train, timesX_test, orig_lc_train, orig_lc_test, objids_train, objids_test

    def multi_read_obj(self, objids):
        nobjects = len(objids)

        labels = np.empty(shape=nobjects, dtype=object)
        y = np.zeros(shape=(nobjects, self.nobs), dtype=object)
        X = np.zeros(shape=(nobjects, self.nfeatures, self.nobs))
        timesX = np.zeros(shape=(nobjects, self.nobs))
        objids_list = []
        orig_lc = []
        deleterows = []

        for i, objid in enumerate(objids):
            print("Preparing {} light curve {} of {}".format(objid, i, nobjects))

            # Get data for each object
            data = self.light_curves[objid]

            redshift = data.meta['redshift']
            b = data.meta['b']
            t0 = data.meta['t0']
            class_num = data.meta['class_num']

            # Make cuts
            deleterows, deleted = self.make_cuts(data, i, deleterows, b, redshift, class_num=class_num, bcut=self.bcut,
                                                 zcut=self.zcut, ignore_classes=self.ignore_classes, pre_trigger=False)
            if deleted:
                continue

            tinterp, len_t = self.get_t_interp(data)
            timesX[i][0:len_t] = tinterp
            orig_lc.append(data)
            objids_list.append(objid)
            X = self.update_X(X, i, data, tinterp, len_t, objid, self.contextual_info, data.meta)

            class_name = self.class_name_map[class_num]
            activeindexes = (tinterp > t0)
            labels[i] = class_name
            y[i][0:len_t][activeindexes] = class_name

        deleterows = np.array(deleterows)
        X = np.delete(X, deleterows, axis=0)
        y = np.delete(y, deleterows, axis=0)
        labels = np.delete(labels, deleterows, axis=0)
        timesX = np.delete(timesX, deleterows, axis=0)
        count_deleterows = len(deleterows)
        num_objects = X.shape[0]

        return labels, y, X, timesX, objids_list, orig_lc, count_deleterows, num_objects

