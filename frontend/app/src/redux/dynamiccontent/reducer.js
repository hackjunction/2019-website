import * as ActionTypes from './actionTypes';
import { handle } from 'redux-pack';

const initialState = {
    tracks: {
        data: [],
        loading: false,
        error: false,
        updated: 0
    },
    stats: {
        data: [],
        loading: false,
        error: false,
        updated: 0
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_TRACKS: {
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    tracks: {
                        ...prevState.tracks,
                        loading: true,
                        error: false
                    }
                }),
                finish: prevState => ({
                    ...prevState,
                    tracks: {
                        ...prevState.tracks,
                        loading: false
                    }
                }),
                failure: prevState => ({
                    ...prevState,
                    tracks: {
                        ...prevState.tracks,
                        error: true
                    }
                }),
                success: prevState => ({
                    ...prevState,
                    tracks: {
                        ...prevState.tracks,
                        data: action.payload,
                        updated: Date.now()
                    }
                })
            });
        }
        case ActionTypes.UPDATE_STATS: {
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    stats: {
                        ...prevState.stats,
                        loading: true,
                        error: false
                    }
                }),
                finish: prevState => ({
                    ...prevState,
                    stats: {
                        ...prevState.stats,
                        loading: false
                    }
                }),
                failure: prevState => ({
                    ...prevState,
                    stats: {
                        ...prevState.stats,
                        error: true
                    }
                }),
                success: prevState => ({
                    ...prevState,
                    stats: {
                        ...prevState.stats,
                        data: action.payload,
                        updated: Date.now()
                    }
                })
            });
        }
        default:
            return state;
    }
}
