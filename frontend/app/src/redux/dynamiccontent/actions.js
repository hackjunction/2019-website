import * as ActionTypes from './actionTypes';

import TracksService from '../../services/tracks';
import StatsService from '../../services/stats';
import FaqsService from '../../services/faqs';
import PartnersService from '../../services/partners';
import EventDatesService from '../../services/eventDates';

import {
    tracksShouldUpdate,
    statsShouldUpdate,
    faqsShouldUpdate,
    partnersShouldUpdate,
    eventDatesShouldUpdate
} from './selectors';

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

export const updateFaqs = () => (dispatch, getState) => {
    const state = getState();
    if (!faqsShouldUpdate(state)) {
        console.log('skipping faqs update');
        return;
    }
    dispatch({
        type: ActionTypes.UPDATE_FAQS,
        promise: FaqsService.getAll(),
        meta: {
            onFailure: e => console.log('Error fetching stats', e)
        }
    });
};

export const updatePartners = () => (dispatch, getState) => {
    const state = getState();
    if (!partnersShouldUpdate(state)) {
        console.log('skipping faqs update');
        return;
    }
    dispatch({
        type: ActionTypes.UPDATE_PARTNERS,
        promise: PartnersService.getAll(),
        meta: {
            onFailure: e => console.log('Error fetching stats', e)
        }
    });
};

export const updateEventDates = () => (dispatch, getState) => {
    const state = getState();
    if (!eventDatesShouldUpdate(state)) {
        console.log('skipping EventDates update');
        return;
    }

    dispatch({
        type: ActionTypes.UPDATE_EVENTDATES,
        promise: EventDatesService.getAll(),
        meta: {
            onFailure: e => console.log('Error fetching EventDates', e)
        }
    });
};
