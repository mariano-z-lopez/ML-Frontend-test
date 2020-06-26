import axios from 'axios'

const BASE_API_URL= process.env['BASE_API_URL'];
const SEARCH_API_URL = `${BASE_API_URL}/sites/MLA/search`;
const ITEM_API_URL = `${BASE_API_URL}/items`;

export const findAllByQuery = (query) => axios.get(SEARCH_API_URL, {
    params: {
        q: query
    }
});

export const findItemById = (itemId) => axios.get(`${ITEM_API_URL}/${itemId}`);

export const findItemDescriptionById = (itemId) => axios.get(`${ITEM_API_URL}/${itemId}/description`);