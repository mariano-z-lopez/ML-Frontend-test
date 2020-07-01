export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

export const saveCategories = (categories) => {
    return {
        type: SAVE_CATEGORIES,
        payload: categories
    }
};