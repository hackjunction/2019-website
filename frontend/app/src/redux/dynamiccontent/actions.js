import * as ActionTypes from './actionTypes';
import * as GraphqlService from '../../services/graphql/client';

import { shouldUpdate } from './selectors';

export const updateDynamicContent = () => (dispatch, getState) => {
    if (!shouldUpdate(getState())) {
        return;
    }

    dispatch({
        type: ActionTypes.UPDATE_DYNAMIC_CONTENT,
        promise: GraphqlService.getDynamicContent(),
        meta: {
            onFailure: e => console.log('Error updating dynamic content', e)
        }
    });
};

export const toggleSidebar = open => ({
    type: ActionTypes.TOGGLE_SIDEBAR,
    payload: open
});

export const setNavTitle = title => ({
    type: ActionTypes.SET_NAV_TITLE,
    payload: title
});
