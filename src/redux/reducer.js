import { EXAMPLES } from '../shared/examples';
import { HERO } from '../shared/hero';

export const initialState = {
    examples: EXAMPLES,
    hero: HERO
};

export const Reducer = (state = initialState, action) => {
    return state;
};