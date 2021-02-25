import * as ActionTypes from './ActionTypes';
import { EXAMPLES } from '../shared/examples';
import { ABOUTINFO } from '../shared/aboutInfo';
import { HERO } from '../shared/hero';
import { PAGELINKS } from '../shared/pageLinks';
import { EXAMPLESBACKEND } from '../shared/examplesBackend';
import { EXAMPLESREACT } from '../shared/examplesReact';
import { EXAMPLESBOOTSTRAP } from '../shared/examplesBootstrap';
import { EXAMPLESMISC } from '../shared/examplesMisc';


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

// examples backend

export const fetchExamplesBackend = () => dispatch => {

    dispatch(examplesBackendLoading());

    setTimeout(() => {
        dispatch(addExamplesBackend(EXAMPLESBACKEND));
    }, 2000);
};

export const examplesBackendLoading = () => ({
    type: ActionTypes.EXAMPLESBACKEND_LOADING
});

export const examplesBackendFailed = errMess => ({
    type: ActionTypes.EXAMPLESBACKEND_FAILED,
    payload: errMess
});

export const addExamplesBackend = examplesBackend => ({
    type: ActionTypes.ADD_EXAMPLESBACKEND,
    payload: examplesBackend
});

// examples react

export const fetchExamplesReact = () => dispatch => {

    dispatch(examplesReactLoading());

    setTimeout(() => {
        dispatch(addExamplesReact(EXAMPLESREACT));
    }, 2000);
};

export const examplesReactLoading = () => ({
    type: ActionTypes.EXAMPLESREACT_LOADING
});

export const examplesReactFailed = errMess => ({
    type: ActionTypes.EXAMPLESREACT_FAILED,
    payload: errMess
});

export const addExamplesReact = examplesReact => ({
    type: ActionTypes.ADD_EXAMPLESREACT,
    payload: examplesReact
});

// examples bootstrap

export const fetchExamplesBootstrap = () => dispatch => {

    dispatch(examplesBootstrapLoading());

    setTimeout(() => {
        dispatch(addExamplesBootstrap(EXAMPLESBOOTSTRAP));
    }, 2000);
};

export const examplesBootstrapLoading = () => ({
    type: ActionTypes.EXAMPLESBOOTSTRAP_LOADING
});

export const examplesBootstrapFailed = errMess => ({
    type: ActionTypes.EXAMPLESBOOTSTRAP_FAILED,
    payload: errMess
});

export const addExamplesBootstrap = examplesBootstrap => ({
    type: ActionTypes.ADD_EXAMPLESBOOTSTRAP,
    payload: examplesBootstrap
});

// examples misc

export const fetchExamplesMisc = () => dispatch => {

    dispatch(examplesMiscLoading());

    setTimeout(() => {
        dispatch(addExamplesMisc(EXAMPLESMISC));
    }, 2000);
};

export const examplesMiscLoading = () => ({
    type: ActionTypes.EXAMPLESMISC_LOADING
});

export const examplesMiscFailed = errMess => ({
    type: ActionTypes.EXAMPLESMISC_FAILED,
    payload: errMess
});

export const addExamplesMisc = examplesMisc => ({
    type: ActionTypes.ADD_EXAMPLESMISC,
    payload: examplesMisc
});