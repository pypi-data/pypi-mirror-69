# Copyright (C) 2019 Maxim Godzi, Anatoly Zaytsev, Dmitrii Kiselev
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.


import numpy as np
import pandas as pd
import warnings


def _find_last_min(cnt):
    for i in range(99, 0, -1):
        if _check_local_minimum(i - 1, cnt, neighbours=10):
            break
    return i


def _check_local_minimum(idx, cnt, neighbours=10):
    return cnt[idx] == min(cnt[idx - neighbours: idx + neighbours])


def _find_threshold(time_val):
    cnt, thresh = np.histogram(np.log(time_val), bins=100)  # TODO parametrize + visualization
    idx = _find_last_min(cnt)
    return np.exp(thresh[idx])


def split_sessions(data, minimal_thresh=30, lower_filter=1, upper_filter=99):
    """
    Creates ``session`` column with session rank in given dataset.

    Parameters
    --------
    data: pd.DataFrame
        Clickstream data.
    minimal_thresh: int, optional
        Minimal time difference in seconds between two sessions. If  threshold value of time difference between sessions is lower that ``minimal_thresh``, then sessions are split based on this parameter. Default: ``30``
    lower_filter: float, optional
        Minimal percentile of time distribution between events to be considered as different sessions. For instance, equal to 1 would mean that cutoff time diffrecence between events (time difference between pseudosessions) should not be less than 1st percentile of time distribution between events. Range of possible values: [0, 100]. Default: ``1``
    upper_filter: float, optional
        Same as ``lower_filter`` but as an upper limit. Range of possible values: [0, 100]. Default: ``99``

    Returns
    -------
    Creates session column in dataset.

    Return type
    -------
    pd.DataFrame
    """
    time_col = data.retention.retention_config['event_time_col']
    if 'next_timestamp' not in data.columns:
        data.retention._get_shift()
    time_delta = pd.to_datetime(data['next_timestamp']) - pd.to_datetime(data[time_col])
    time_delta = time_delta.dt.total_seconds()
    time_val = time_delta[time_delta.notnull()].values
    time_val = time_val[(time_val > np.percentile(time_val, lower_filter)) &
                        (time_val < np.percentile(time_val, upper_filter))]
    thresh = _find_threshold(time_val)
    if thresh < minimal_thresh:
        thresh = minimal_thresh
    data['session'] = time_delta > thresh
    data['session'] = data.groupby(data.retention.retention_config['index_col']).session.cumsum()
    data['session'] = data.groupby(data.retention.retention_config['index_col']).session.shift(1).fillna(0)


def _learn_lda(data, **kwargs):
    from sklearn.decomposition import LatentDirichletAllocation
    if hasattr(data.retention, 'datatype') and data.retention.datatype == 'features':
        features = data.copy()
    else:
        if 'ngram_range' not in kwargs:
            kwargs.update({'ngram_range': (1, 2)})
        features = data.retention.extract_features(**kwargs)
    lda_filter = LatentDirichletAllocation.get_params(LatentDirichletAllocation)
    if 'random_state' not in kwargs:
        kwargs.update({'random_state': 0})
    kwargs = {i: j for i, j in kwargs.items() if i in lda_filter}
    lda = LatentDirichletAllocation(**kwargs)
    lda.fit(features)
    mech_desc = pd.DataFrame(lda.components_, columns=features.columns)
    return mech_desc, lda


def _map_mechanic_names(res, main_event_map):
    x = res.loc[:, main_event_map.keys()].copy()
    x = x.rename_axis(main_event_map, axis=1)
    mapper = {}
    for i in range(x.shape[0]):
        name = x.max().argmax()
        idx = x[name].argmax()
        print(name, idx)
        mapper.update({idx: name})
        x = x.drop(idx)
        x = x.drop(name, 1)
        if (x < 1).sum().sum() == x.shape[0] ** 2:
            warnings.warn('Cannot allocate mechanics by given events: {}'.format(' '.join(x.columns)))
            break
    return mapper


def weight_by_mechanics(data, main_event_map, **kwargs):
    """
    Calculates weights of mechanics over ``index_col``.

    Parameters
    --------
    data: pd.DataFrame
        Сlickstream or features data.
    main_event_map: dict
        Mapping of main events into mechanics.
    kwargs: optional
        ``sklearn.decomposition.LatentDirichletAllocation()`` and ``BaseDataset.retention.extract_features()`` parameters.

    Returns
    -------
    Weights of mechanics for each ``index_col`` and mechanics description.
    """
    mech_desc, lda = _learn_lda(data, **kwargs)
    mechanics = _map_mechanic_names(mech_desc, main_event_map)
    res = pd.DataFrame(lda.transform(data)).rename(mechanics, axis=1)
    mech_desc = mech_desc.rename(mechanics)
    setattr(res.retention, 'datatype', 'features')
    return res, mech_desc


def _event_filter_equal(x, y):
    return x != y


def _event_filter_startswith(x, y):
    return ~x.str.startswith(y)


def _event_filter_contains(x, y):
    return ~x.map(lambda z: y in z)
