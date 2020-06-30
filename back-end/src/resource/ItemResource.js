import express from 'express'
import {findAllByQuery as _findAllByQuery, findById as _findById} from "../service/ItemService"

const router = express.Router();

const handleError = (e, res) => {
    console.error(e);
    res.status(500).send({message: "Internal server error, please try later."})
};

const findAllByQuery = async (req, res) => {
    let query = req.query.search;
    try {
        res.send(await _findAllByQuery(query));
    } catch (e) {
        handleError(e, res);
    }
};

const findById = async (req, res) => {
    let itemId = req.params.itemId;
    try {
        res.send(await _findById(itemId));
    } catch (e) {
        handleError(e, res);
    }
};

export default router
    .get('/', findAllByQuery)
    .get('/:itemId', findById);