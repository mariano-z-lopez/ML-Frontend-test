import {authorTransformer} from '../toDomain';

export default (itemsResponse, userResponse = {name: "mock", lastName: "mock"}, pageable = {size: 4, offset: 0}) => ({
    author: authorTransformer(userResponse),
    items:  itemsResponse
});
