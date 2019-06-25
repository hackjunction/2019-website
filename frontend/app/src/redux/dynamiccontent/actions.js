import * as ActionTypes from './actionTypes';

import TracksService from '../../services/tracks';
import StatsService from '../../services/tracks';

import { tracksShouldUpdate, statsShouldUpdate } from './selectors';

export const updateTracks = () => (dispatch, getState) => {
    const state = getState();
    if (!tracksShouldUpdate(state)) {
        console.log('skipping tracks update');
        return;
    }

    dispatch({
        type: ActionTypes.UPDATE_TRACKS,
        promise: TracksService.getAll(),
        meta: {
            onFailure: e => console.log('Error fetching tracks', e)
        }
    });
};

export const updateStats = () => (dispatch, getState) => {
    const state = getState();
    if (!statsShouldUpdate(state)) {
        console.log('skipping stats update');
        return;
    }

    dispatch({
        type: ActionTypes.UPDATE_STATS,
        promise: StatsService.getAll(),
        meta: {
            onFailure: e => console.log('Error fetching stats', e)
        }
    });
};
