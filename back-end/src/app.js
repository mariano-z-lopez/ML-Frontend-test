import 'dotenv/config';
import itemResource from './resource/ItemResource';
import express from "express";

const ITEMS_BASE_URL = `/items`;
const port = process.env.PORT || 3000;
const app = express();

app.use(ITEMS_BASE_URL, itemResource);

app.listen(port, () => console.log(`ML items API - listening at http://localhost:${port}${ITEMS_BASE_URL}`));