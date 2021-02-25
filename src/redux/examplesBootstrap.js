import * as ActionTypes from './ActionTypes';

export const ExamplesBootstrap = (state = {
    isLoading: true,
    errMess: null,
    examplesBootstrap: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_EXAMPLESBOOTSTRAP:
        return {...state, isLoading: false, errMess: null, examplesBootstrap: action.payload};
    case ActionTypes.EXAMPLESBOOTSTRAP_LOADING:
        return {...state, isLoading: true, errMess: null, examplesBootstrap: []};
    case ActionTypes.EXAMPLESBOOTSTRAP_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};