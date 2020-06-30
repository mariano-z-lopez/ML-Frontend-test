import {baseItemTransformer, itemDescriptionTransformer, pictureTransformer} from "../toDomain";

export default (itemResponse, descriptionResponse, authorResponse) => ({
    author: authorResponse,
    item: {
        ...baseItemTransformer(itemResponse),
        sold_quantity: itemResponse.sold_quantity,
        picture: pictureTransformer(itemResponse),
        description: itemDescriptionTransformer(descriptionResponse)
    }
});