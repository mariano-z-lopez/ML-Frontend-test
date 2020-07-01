import {SAVE_CATEGORIES} from "./CategoriesAction";

export const categoriesReducer = (state, action) => {
    if (action.type === SAVE_CATEGORIES) {
        return setCategories(state, action.payload);
    } else {
        return state;
    }
};

const setCategories = (state, categories) => {
    return {
        ...state,
        categories
    }
};