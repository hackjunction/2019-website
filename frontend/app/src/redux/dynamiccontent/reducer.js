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
    },
    faqs: {
        data: [],
        loading: false,
        error: false,
        updated: 0
    },
    partners: {
        data: [],
        loading: false,
        error: false,
        updated: 0
    },
    eventDates: {
        data: [],
        loading: false,
        error: false,
        updated: 0
    },
    volunteerDates: {
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
        case ActionTypes.UPDATE_FAQS: {
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    faqs: {
                        ...prevState.faqs,
                        loading: true,
                        error: false
                    }
                }),
                finish: prevState => ({
                    ...prevState,
                    faqs: {
                        ...prevState.faqs,
                        loading: false
                    }
                }),
                failure: prevState => ({
                    ...prevState,
                    faqs: {
                        ...prevState.faqs,
                        error: true
                    }
                }),
                success: prevState => ({
                    ...prevState,
                    faqs: {
                        ...prevState.faqs,
                        data: action.payload,
                        updated: Date.now()
                    }
                })
            });
        }
        case ActionTypes.UPDATE_PARTNERS: {
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    partners: {
                        ...prevState.partners,
                        loading: true,
                        error: false
                    }
                }),
                finish: prevState => ({
                    ...prevState,
                    partners: {
                        ...prevState.partners,
                        loading: false
                    }
                }),
                failure: prevState => ({
                    ...prevState,
                    partners: {
                        ...prevState.partners,
                        error: true
                    }
                }),
                success: prevState => ({
                    ...prevState,
                    partners: {
                        ...prevState.partners,
                        data: action.payload,
                        updated: Date.now()
                    }
                })
            });
        }

        case ActionTypes.UPDATE_EVENTDATES: {
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    eventDates: {
                        ...prevState.eventDates,
                        loading: true,
                        error: false
                    }
                }),
                finish: prevState => ({
                    ...prevState,
                    eventDates: {
                        ...prevState.eventDates,
                        loading: false
                    }
                }),
                failure: prevState => ({
                    ...prevState,
                    eventDates: {
                        ...prevState.eventDates,
                        error: true
                    }
                }),
                success: prevState => ({
                    ...prevState,
                    eventDates: {
                        ...prevState.eventDates,
                        data: action.payload,
                        updated: Date.now()
                    }
                })
            });
        }
        case ActionTypes.UPDATE_VOLUNTEERDATES: {
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    volunteerDates: {
                        ...prevState.volunteerDates,
                        loading: true,
                        error: false
                    }
                }),
                finish: prevState => ({
                    ...prevState,
                    volunteerDates: {
                        ...prevState.volunteerDates,
                        loading: false
                    }
                }),
                failure: prevState => ({
                    ...prevState,
                    volunteerDates: {
                        ...prevState.volunteerDates,
                        error: true
                    }
                }),
                success: prevState => ({
                    ...prevState,
                    volunteerDates: {
                        ...prevState.volunteerDates,
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
