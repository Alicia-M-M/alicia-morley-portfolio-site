import * as ActionTypes from './ActionTypes';

export const ExamplesMisc = (state = {
    isLoading: true,
    errMess: null,
    examplesMisc : []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_EXAMPLESMISC:
        return {...state, isLoading: false, errMess: null, examplesMisc: action.payload};
    case ActionTypes.EXAMPLESMISC_LOADING:
        return {...state, isLoading: true, errMess: null, examplesMisc: []};
    case ActionTypes.EXAMPLESMISC_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};