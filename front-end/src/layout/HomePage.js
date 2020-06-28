import React, {useEffect, useState} from "react";
import MLAppBar from "../component/MLAppBar";
import MLAppContainer from "../component/MLAppContainer";
import MLProductItem from "../component/MLProductItem";
import itemService from "../service/ItemService";

export default () => {
    let [state, setState] = useState({
        appBarTextPlaceholder: "Nunca dejes de buscar",
        items: []
    });

    const handleSearchChange = (query) => {
        itemService.findAllByQuery(query)
            .then(res=> {
                setState({
                    ...state,
                    items: res.data.items
                })
            })
    };


    const ProductList = () => {
        return state.items.map(item => <MLProductItem key={item.id} product={item}/>)
    };

    return (
        <>
            <MLAppBar placeholder={state.appBarTextPlaceholder} onChange={handleSearchChange}/>
            <MLAppContainer>
                <ProductList/>
            </MLAppContainer>
        </>
    );
}