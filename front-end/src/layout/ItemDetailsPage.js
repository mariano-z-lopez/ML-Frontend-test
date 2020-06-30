import MLProductItemDetails from "../component/MLProductItemDetails";
import { useParams } from "react-router-dom";
import itemService from "../service/ItemService";
import React, {useEffect, useState} from "react";

export default () => {
    let { itemId } = useParams();
    let [product, setProduct] = useState(null);

    const dispatchSearch = () => {
        itemService.findById(itemId)
            .then(res => setProduct(res.data));
    };

    useEffect(dispatchSearch, []);

    return (
        product && <MLProductItemDetails product={product}/>
    );
}