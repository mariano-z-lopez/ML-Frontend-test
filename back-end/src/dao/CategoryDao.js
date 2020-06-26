import axios from 'axios'

const BASE_API_URL= process.env['BASE_API_URL'];
const CATEGORIES_API_URL = `${BASE_API_URL}/categories`;

export const findCategoryById = (categoryId) => axios.get(`${CATEGORIES_API_URL}/${categoryId}`);