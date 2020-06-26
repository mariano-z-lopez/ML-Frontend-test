import express from 'express'
import {findAllByQuery as _findAllByQuery, findById as _findById} from "../service/ItemService"

const router = express.Router();

const findAllByQuery = async (req, res) => {
    let query = req.query.search;
    res.send(await _findAllByQuery(query));
};

const findById = async (req, res) => {
    let itemId = req.params.itemId;
    res.send(await _findById(itemId));
};

export default router
    .get('/', findAllByQuery)
    .get('/:itemId', findById);