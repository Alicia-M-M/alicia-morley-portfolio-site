import * as ActionTypes from './ActionTypes';

export const AboutInfo = (state = {
    isLoading: true,
    errMess: null,
    aboutInfo: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_ABOUTINFO:
        return {...state, isLoading: false, errMess: null, aboutInfo: action.payload};
    case ActionTypes.ABOUTINFO_LOADING:
        return {...state, isLoading: true, errMess: null, aboutInfo: []};
    case ActionTypes.ABOUTINFO_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};