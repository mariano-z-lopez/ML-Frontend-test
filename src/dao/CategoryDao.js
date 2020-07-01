import axios from 'axios'
import {BASE_API_URL} from "../configuration/AplicationProperties";

const CATEGORIES_API_URL = `${BASE_API_URL}/categories`;

export const findCategoryById = (categoryId) => axios.get(`${CATEGORIES_API_URL}/${categoryId}`);