import { ADD_SEARCH, REMOVE_SEARCH } from "../actions";

export const searchReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_SEARCH:
            {
                return action.search;
            }
        case REMOVE_SEARCH:
            return '';
        default:
            return state;
    }
};