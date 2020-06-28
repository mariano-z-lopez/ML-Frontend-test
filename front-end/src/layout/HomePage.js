import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "../router";
import MLAppBar from "../component/MLAppBar";
import MLAppContainer from "../component/MLAppContainer";

export default () => {
    return (
        <BrowserRouter>
            <MLAppBar/>
            <MLAppContainer>
                <Routes/>
            </MLAppContainer>
        </BrowserRouter>
    );
}