import {authorTransformer, baseItemTransformer, itemDescriptionTransformer, pictureTransformer} from "../toDomain";

export default (itemResponse, descriptionResponse, userResponse = {name:"mock", lastName:"mock"}) => ({
    author: authorTransformer(userResponse),
    item: {
        ...baseItemTransformer(itemResponse),
        sold_quantity: itemResponse.sold_quantity,
        picture: pictureTransformer(itemResponse),
        description: itemDescriptionTransformer(descriptionResponse)
    }
});