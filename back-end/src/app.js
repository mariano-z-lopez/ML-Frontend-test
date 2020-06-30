import 'dotenv/config';
import itemResource from './resource/ItemResource';
import {APP_PORT} from "./configuration/AplicationProperties";
import express from "express";
import cors from 'cors'

const ITEMS_BASE_URL = `/api/items`;
const app = express();

app.use(cors());
app.use(ITEMS_BASE_URL, itemResource);

app.listen(APP_PORT, () => console.log(`ML items API - listening at http://localhost:${APP_PORT}${ITEMS_BASE_URL}`));