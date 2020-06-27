import React, {useState} from "react";
import MLAppBar from "../component/MLAppBar";
import MLAppContainer from "../component/MLAppContainer";

export default () => {
    let [state] = useState({
        appBarTextPlaceholder: "Nunca dejes de buscar"
    });

    return (
        <>
            <MLAppBar placeholder={state.appBarTextPlaceholder}/>
            <MLAppContainer>
            </MLAppContainer>
        </>
    );
}