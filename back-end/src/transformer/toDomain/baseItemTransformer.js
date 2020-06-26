import priceTransformer from './priceTransformer';

export default ({id, title, condition, shipping: {free_shipping}, ...rest}) => ({
    id,
    title,
    price: priceTransformer(rest),
    condition,
    free_shipping
});

