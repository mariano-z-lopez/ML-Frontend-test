import {searchItemTransformer, categoryTransformer, authorTransformer} from '../toDomain';

export default (searchResponse, categoryResponse, userResponse, pageable = {size: 4, offset: 0}) => ({
    author: authorTransformer(userResponse),
    categories: categoryTransformer(categoryResponse),
    items: searchResponse.results
        .slice(pageable.offset, pageable.size)
        .map(item => searchItemTransformer(item))
});
