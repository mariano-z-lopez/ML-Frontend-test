import 'dotenv/config';
import itemResource from './resource/ItemResource';
import express from "express";
import cors from 'cors'

const ITEMS_BASE_URL = `/api/items`;
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(ITEMS_BASE_URL, itemResource);

app.listen(port, () => console.log(`ML items API - listening at http://localhost:${port}${ITEMS_BASE_URL}`));