import baseItemTransformer from "./baseItemTransformer";
import pictureTransformer from "./pictureTransformer";
export default ({pictures, ...rest}) => ({
    ...baseItemTransformer(rest),
    picture: pictureTransformer(pictures)
})