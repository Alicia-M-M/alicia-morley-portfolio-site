import * as ActionTypes from './ActionTypes';

export const ExamplesBackend = (state = {
    isLoading: true,
    errMess: null,
    examplesBackend: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_EXAMPLESBACKEND:
        return {...state, isLoading: false, errMess: null, examplesBackend: action.payload};
    case ActionTypes.EXAMPLESBACKEND_LOADING:
        return {...state, isLoading: true, errMess: null, examplesBackend: []};
    case ActionTypes.EXAMPLESBACKEND_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};