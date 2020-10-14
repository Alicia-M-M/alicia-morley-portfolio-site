import {createStore, combineReducers} from 'redux';
import { Examples } from './examples';
import { Hero } from './hero';
import { AboutInfo } from './aboutInfo';
import { PageLinks } from './pageLinks';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            examples: Examples,
            hero: Hero,
            aboutInfo: AboutInfo,
            pageLinks: PageLinks
        })
    );

    return store;
};