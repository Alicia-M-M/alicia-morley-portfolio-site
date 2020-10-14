import * as ActionTypes from './ActionTypes';

export const PageLinks = (state = {
    isLoading: true,
    errMess: null,
    pageLinks: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_PAGELINKS:
        return {...state, isLoading: false, errMess: null, pageLinks: action.payload};
    case ActionTypes.PAGELINKS_LOADING:
        return {...state, isLoading: true, errMess: null, pageLinks: []};
    case ActionTypes.PAGELINKS_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};