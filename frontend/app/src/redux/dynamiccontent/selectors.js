import { sortBy, filter } from 'lodash-es';
import { createSelector } from 'reselect';
import config from '../../config';

const TRACKS_UPDATE_INTERVAL = config.IS_DEV ? 0 : 1000 * 60 * 15;

export const tracks = state => state.dynamicContent.tracks.data;
export const tracksLoading = state => state.dynamicContent.tracks.loading;
export const tracksError = state => state.dynamicContent.tracks.error;
export const tracksUpdated = state => state.dynamicContent.tracks.updated;

export const stats = state => state.dynamicContent.stats.data;
export const statsLoading = state => state.dynamicContent.stats.loading;
export const statsError = state => state.dynamicContent.stats.error;
export const statsUpdated = state => state.dynamicContent.stats.updated;

export const tracksShouldUpdate = createSelector(
    tracksUpdated,
    tracksLoading,
    (updated, loading) => {
        return !loading && Date.now() - updated > 1000 * 10;
    }
);

export const tracksAlphabetically = createSelector(
    tracks,
    data => {
        return sortBy(data, d => d.name.toLowerCase());
    }
);

export const tracksList = createSelector(
    tracks,
    data => {
        return filter(data, 'showInList');
    }
);

export const tracksListAlphabetically = createSelector(
    tracksAlphabetically,
    data => {
        return filter(data, 'showInList');
    }
);

export const statsShouldUpdate = createSelector(
    statsUpdated,
    statsLoading,
    (updated, loading) => {
        return !loading && Date.now() - updated > 1000 * 10;
    }
);
