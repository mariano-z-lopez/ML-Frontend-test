import {findAllByQuery as _findAllByQuery, findItemById as _findItemById, findItemDescriptionById} from '../dao/ItemDao'
import {getAuthor} from "./AuthorService";
import {categoryTransformer, searchItemTransformer} from "../transformer/toDomain";
import {findItemTransformer} from "../transformer/toDto"

const getCategories = ({filters}) => {
    let categoriesResponse = filters.find(item=> "id" in item && item.id === "category");
    let categories;

    if (typeof categoriesResponse !== "undefined") {
        categories =  categoryTransformer(categoriesResponse);
    } else {
        categories = [];
    }

    return categories;
};

export const findAllByQuery = async (query, pageable = {size: 4, offset: 0}) => {
    let res = await _findAllByQuery(query);
    let result = res.data.results.slice(pageable.offset, pageable.size);

    let author = getAuthor();
    let items = result.map(item => searchItemTransformer(item));
    let categories = getCategories(res.data);

    return {author, categories, items}
};

export const findById = async (itemId) => {
    return Promise.all([_findItemById(itemId), findItemDescriptionById(itemId)])
        .then(res=> {
            let [itemResponse, itemDescriptionResponse] = res;
            return findItemTransformer(itemResponse.data, itemDescriptionResponse.data, getAuthor())
        })
};