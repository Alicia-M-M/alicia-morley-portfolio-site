import * as ActionTypes from './ActionTypes';
import { EXAMPLES } from '../shared/examples';
import { ABOUTINFO } from '../shared/aboutInfo';
import { HERO } from '../shared/hero';
import { PAGELINKS } from '../shared/pageLinks';


// examples
export const fetchExamples = () => dispatch => {

    dispatch(examplesLoading());

    setTimeout(() => {
        dispatch(addExamples(EXAMPLES));
    }, 2000);
};

export const examplesLoading = () => ({
    type: ActionTypes.EXAMPLES_LOADING
});

export const examplesFailed = errMess => ({
    type: ActionTypes.EXAMPLES_FAILED,
    payload: errMess
});

export const addExamples = examples => ({
    type: ActionTypes.ADD_EXAMPLES,
    payload: examples
});

// aboutInfo

export const fetchAboutInfo = () => dispatch => {

    dispatch(aboutInfoLoading());

    setTimeout(() => {
        dispatch(addAboutInfo(ABOUTINFO));
    }, 2000);
};

export const aboutInfoLoading = () => ({
    type: ActionTypes.ABOUTINFO_LOADING
});

export const aboutInfoFailed = errMess => ({
    type: ActionTypes.ABOUTINFO_FAILED,
    payload: errMess
});

export const addAboutInfo = aboutInfo => ({
    type: ActionTypes.ADD_ABOUTINFO,
    payload: aboutInfo
});

// hero

export const fetchHero = () => dispatch => {

    dispatch(heroLoading());

    setTimeout(() => {
        dispatch(addHero(HERO));
    }, 2000);
};

export const heroLoading = () => ({
    type: ActionTypes.HERO_LOADING
});

export const heroFailed = errMess => ({
    type: ActionTypes.HERO_FAILED,
    payload: errMess
});

export const addHero = hero => ({
    type: ActionTypes.ADD_HERO,
    payload: hero
});

// pagelinks

export const fetchPageLinks = () => dispatch => {

    dispatch(pageLinksLoading());

    setTimeout(() => {
        dispatch(addPageLinks(PAGELINKS));
    }, 2000);
};

export const pageLinksLoading = () => ({
    type: ActionTypes.PAGELINKS_LOADING
});

export const pageLinksFailed = errMess => ({
    type: ActionTypes.PAGELINKS_FAILED,
    payload: errMess
});

export const addPageLinks = pageLinks => ({
    type: ActionTypes.ADD_PAGELINKS,
    payload: pageLinks
});