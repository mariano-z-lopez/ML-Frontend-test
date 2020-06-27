import React, {useState} from "react";
import MLAppBar from "../component/MLAppBar";
import MLAppContainer from "../component/MLAppContainer";
import MLProductItem from "../component/MLProductItem";

export default () => {
    let [state] = useState({
        appBarTextPlaceholder: "Nunca dejes de buscar",
        exampleProduct: {
            title: "iPod Nano 7ma Generación 16 Gb Violeta",
            price: {amount: 7.900, currency_id: "ARS", decimals: 3},
            picture: "http://mla-s1-p.mlstatic.com/948059-MLA41805660187_052020-I.jpg",
            free_shipping: true,
            address: {city_name: "Capital Federal"}
        }
    });

    return (
        <>
            <MLAppBar placeholder={state.appBarTextPlaceholder}/>
            <MLAppContainer>
                <MLProductItem product={state.exampleProduct}/>
            </MLAppContainer>
        </>
    );
}