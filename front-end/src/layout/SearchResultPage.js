import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import MLProductItem from "../component/MLProductItem";
import itemService from "../service/ItemService";
import {SEARCH_RESULT_URL} from "../router";
import {useDispatch} from "react-redux";
import {saveCategories} from "../store/CategoriesAction";

export default (props) => {
    let history = useHistory();
    let queryParams = new URLSearchParams(useLocation().search);
    const dispatch = useDispatch();
    let [state, setState] = useState({
        items: [],
    });

    const handleSearchChange = () => {
        let _query = queryParams.get("search");
        console.log("search", _query);
        if (_query) {
            itemService.findAllByQuery(_query)
                .then(res=> {
                    persistItems(res.data.items);
                    persistCategories(res.data.categories);
                })
        }
    };

    const persistItems = (items) => setState({...state, items});

    const persistCategories = (categories) => dispatch(saveCategories(categories));

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