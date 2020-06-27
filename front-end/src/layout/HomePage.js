import React, {useState} from "react";
import MLAppBar from "../component/MLAppBar";

export default () => {
    let [state] = useState({
        appBarTextPlaceholder: "Nunca dejes de buscar"
    });

    return (
        <>
            <MLAppBar placeholder={state.appBarTextPlaceholder}/>
        </>
    );
}