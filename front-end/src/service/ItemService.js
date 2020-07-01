import axios from './index'
const ITEMS_URL = "/items";

const findAllByQuery = (query) => axios.get(ITEMS_URL, {
    params: {
        search: query
    }
});

const findById = (id) => axios.get(`${ITEMS_URL}/${id}`);

export default {findAllByQuery, findById}