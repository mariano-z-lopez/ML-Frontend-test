import baseItemTransformer from "./baseItemTransformer";
import {categoryTransformer} from "./index";
export default ({thumbnail, address, ...rest}, categoryResponse) => ({
    categories: categoryTransformer(categoryResponse),
    ...baseItemTransformer(rest),
    picture: thumbnail,
    address
})