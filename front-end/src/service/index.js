import axios from 'axios';
export const BASE_URL = process.env.API_URL || "http://localhost:3000/api";
export default axios.create({baseURL: BASE_URL});