import baseItemTransformer from "./baseItemTransformer";
export default ({thumbnail, ...rest}) => ({
    ...baseItemTransformer(rest),
    picture: thumbnail
})