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

export const faqs = state => state.dynamicContent.faqs.data;
export const faqsLoading = state => state.dynamicContent.faqs.loading;
export const faqsError = state => state.dynamicContent.faqs.error;
export const faqsUpdated = state => state.dynamicContent.faqs.updated;

export const partners = state => state.dynamicContent.partners.data;
export const partnersLoading = state => state.dynamicContent.partners.loading;
export const partnersError = state => state.dynamicContent.partners.error;
export const partnersUpdated = state => state.dynamicContent.partners.updated;

export const eventDates = state => state.dynamicContent.eventDates.data;
export const eventDatesLoading = state =>
    state.dynamicContent.eventDates.loading;
export const eventDatesError = state => state.dynamicContent.eventDates.error;
export const eventDatesUpdated = state =>
    state.dynamicContent.eventDates.updated;

export const tracksShouldUpdate = createSelector(
    tracksUpdated,
    tracksLoading,
    (updated, loading) => {
        return !loading && Date.now() - updated > 1000 * 10;
    }
);

export const statsShouldUpdate = createSelector(
    statsUpdated,
    statsLoading,
    (updated, loading) => {
        return !loading && Date.now() - updated > 1000 * 10;
    }
);

export const faqsShouldUpdate = createSelector(
    faqsUpdated,
    faqsLoading,
    (updated, loading) => {
        return !loading && Date.now() - updated > 1000 * 10;
    }
);

export const partnersShouldUpdate = createSelector(
    partnersUpdated,
    partnersLoading,
    (updated, loading) => {
        return !loading && Date.now() - updated > 1000 * 10;
    }
);
export const eventDatesShouldUpdate = createSelector(
    eventDatesUpdated,
    eventDatesLoading,
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
