import {authorTransformer} from '../toDomain';

export default (itemsResponse, userResponse = {name: "mock", lastName: "mock"}) => ({
    author: authorTransformer(userResponse),
    items:  itemsResponse
});
