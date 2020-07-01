import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger'
import {categoriesReducer} from "./CategoriesReducer";

const initialState = {
    categories: []
};

export const categoriesStore = createStore(categoriesReducer, initialState, applyMiddleware(reduxLogger));