import baseItemTransformer from "./baseItemTransformer";

export default ({thumbnail, address, ...rest}) => ({
    ...baseItemTransformer(rest),
    picture: thumbnail,
    address
})