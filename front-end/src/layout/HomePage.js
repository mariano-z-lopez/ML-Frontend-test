import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "../router";
import MLAppBar from "../component/MLAppBar";
import MLAppContainer from "../component/MLAppContainer";
import MLCategoriesBreadcrumbs from "../component/MLCategoriesBreadcrumbs";

export default () => {

    return (
        <BrowserRouter>
            <MLAppBar/>
            <MLCategoriesBreadcrumbs/>
            <MLAppContainer>
                <Routes/>
            </MLAppContainer>
        </BrowserRouter>
    );
}