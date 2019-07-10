import * as ActionTypes from './actionTypes';
import { handle } from 'redux-pack';

const initialState = {
    content: {},
    loading: false,
    error: false,
    lastUpdate: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_DYNAMIC_CONTENT: {
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    loading: true,
                    error: false
                }),
                finish: prevState => ({ ...prevState, loading: false }),
                failure: prevState => ({ ...prevState, error: true }),
                success: prevState => {
                    return {
                        ...prevState,
                        content: action.payload.data,
                        lastUpdate: Date.now()
                    };
                }
            });
        }
        default:
            return state;
    }
}
