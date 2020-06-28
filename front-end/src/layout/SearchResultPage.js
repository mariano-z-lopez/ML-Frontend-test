import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import MLProductItem from "../component/MLProductItem";
import itemService from "../service/ItemService";

export default (props) => {
    let queryParams = new URLSearchParams(useLocation().search);
    let [state, setState] = useState({
        items: []
    });

    const handleSearchChange = () => {
        let _query = queryParams.get("search");
        if (_query) {
            itemService.findAllByQuery(_query)
                .then(res=> {
                    setState({
                        ...state,
                        items: res.data.items
                    })
                })
        }
    };

    useEffect(handleSearchChange, [props.location.search]);

    const ProductList = () => state.items.map(item => <MLProductItem key={item.id} product={item}/>)

    return (
        <ProductList/>
    );
}