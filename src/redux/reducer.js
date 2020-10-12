import { EXAMPLES } from '../shared/examples';
import { HERO } from '../shared/hero';
import { ABOUTINFO } from '../shared/aboutInfo';
import { PAGELINKS } from '../shared/pageLinks';

export const initialState = {
    examples: EXAMPLES,
    hero: HERO,
    aboutInfo: ABOUTINFO,
    pageLinks:PAGELINKS
};

export const Reducer = (state = initialState, action) => {
    return state;
};