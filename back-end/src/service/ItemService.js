import {findAllByQuery as _findAllByQuery, findItemById as _findItemById, findItemDescriptionById} from '../dao/ItemDao'
import {findCategoryById as _findCategoryById} from '../dao/CategoryDao'
import {searchItemTransformer} from "../transformer/toDomain";
import {findItemTransformer, searchQueryTransformer} from "../transformer/toDto"

export const findAllByQuery = async (query, pageable = {size: 4, offset: 0}) => {
    let res = await _findAllByQuery(query);
    let items = res.data.results.slice(pageable.offset, pageable.size);

    return Promise.all(items.map(async item => {
        let {category_id: categoryId} = item;

        let categoryRes = await _findCategoryById(categoryId);
        return searchItemTransformer(item, categoryRes.data);
    })).then(itemsWithCategories => searchQueryTransformer(itemsWithCategories));
};

export const findById = async (itemId) => {
    return Promise.all([_findItemById(itemId), findItemDescriptionById(itemId)])
        .then(res=> {
            let [itemResponse, itemDescriptionResponse] = res;
            return findItemTransformer(itemResponse.data, itemDescriptionResponse.data)
        })
};