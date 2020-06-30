import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import MLProductItem from "../component/MLProductItem";
import itemService from "../service/ItemService";
import {SEARCH_RESULT_URL} from "../router";

export default (props) => {
    let history = useHistory();
    let queryParams = new URLSearchParams(useLocation().search);
    let [state, setState] = useState({
        items: [],
        selectedItem: null
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

    const handleOnProductClick = (id) => {
        history.push({
            pathname: `${SEARCH_RESULT_URL}/${id}`
        })
    };

    const ProductList = () => state.items.map(item => {
        return <MLProductItem key={item.id} product={item}
                              handleOnProductClick={()=>handleOnProductClick(item.id)}/>
    });

    return (
        <ProductList/>
    );
}