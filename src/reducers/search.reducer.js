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




// export const categoryFilterReducer = (state = '', action) => {
//     switch (action.type) {
//         case ADD_CATEGORY_TO_FILTER:
//             if (state.includes(action.category)) return state;
//             return state += action.category;
//         case REMOVE_CATEGORY_FROM_FILTER:
//             console.log('remove category', action);
//             const reg = new RegExp(action.category, 'gi');
//             return state.replace(reg, '');
//         default:
//             return state;
//     }
// };