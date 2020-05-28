import { combineReducers } from 'redux';
import shop from './shop.reducer';
import { categoryFilterReducer } from "./category.filter.reducer";
import { searchReducer } from "./search.reducer";
import { orderByPriceReducer } from "./orderByPrice.filter.reducer";
import { paginationReducer } from "./pagination.reducer";

export default combineReducers({
    shop,
    searchFilter: searchReducer,
    categoryFilter: categoryFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
});