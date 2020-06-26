import baseItemTransformer from "./baseItemTransformer";
import {categoryTransformer} from "./index";
export default ({thumbnail, ...rest}, categoryResponse) => ({
    categories: categoryTransformer(categoryResponse),
    ...baseItemTransformer(rest),
    picture: thumbnail
})