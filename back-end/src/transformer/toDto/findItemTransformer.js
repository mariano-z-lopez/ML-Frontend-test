import {authorTransformer, baseItemTransformer, itemDescriptionTransformer} from "../toDomain";

export default (itemResponse, userResponse, descriptionResponse) => ({
    author: authorTransformer(userResponse),
    item: {
        ...baseItemTransformer(itemResponse),
        description: itemDescriptionTransformer(descriptionResponse)
    }
});