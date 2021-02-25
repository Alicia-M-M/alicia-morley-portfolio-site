import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Examples } from './examples';
import { Hero } from './hero';
import { AboutInfo } from './aboutInfo';
import { PageLinks } from './pageLinks';
import { ExamplesBackend } from './examplesBackend';
import { ExamplesReact } from './examplesReact';
import { ExamplesBootstrap } from './examplesBootstrap';
import { ExamplesMisc } from './examplesMisc';
import { InitialMessage } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            examples: Examples,
            hero: Hero,
            aboutInfo: AboutInfo,
            pageLinks: PageLinks,
            examplesBackend: ExamplesBackend,
            examplesReact: ExamplesReact,
            examplesBootstrap: ExamplesBootstrap,
            examplesMisc: ExamplesMisc,
            ...createForms({
                messageForm: InitialMessage
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};