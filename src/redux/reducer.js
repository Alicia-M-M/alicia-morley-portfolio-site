import { EXAMPLES } from '../shared/examples';
import { HERO } from '../shared/hero';
import { ABOUTINFO } from '../shared/aboutInfo';

export const initialState = {
    examples: EXAMPLES,
    hero: HERO,
    aboutInfo: ABOUTINFO
};

export const Reducer = (state = initialState, action) => {
    return state;
};