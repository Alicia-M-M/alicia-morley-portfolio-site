import * as ActionTypes from './ActionTypes';

export const ExamplesReact = (state = {
    isLoading: true,
    errMess: null,
    examplesReact: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_EXAMPLESREACT:
        return {...state, isLoading: false, errMess: null, examplesReact: action.payload};
    case ActionTypes.EXAMPLESREACT_LOADING:
        return {...state, isLoading: true, errMess: null, examplesReact: []};
    case ActionTypes.EXAMPLESREACT_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};