import {HomePage, ItemDetailsPage, SearchResultPage} from "../layout"
import React from "react";
import {Route, Switch} from "react-router-dom";

export const HOME_PAGE_URL = "/";
export const SEARCH_RESULT_URL = "/items";

const routes = [
    {
        url: HOME_PAGE_URL,
        component: HomePage
    },
    {
        url: SEARCH_RESULT_URL,
        component: SearchResultPage
    },
    {
        url: `${SEARCH_RESULT_URL}/:itemId`,
        component: ItemDetailsPage
    }
];

export const Routes = () => {
    const Routes = () => routes.map(route => {
        return <Route key={route.url} path={route.url} exact component={route.component}/>
    });

    return (
        <Switch>
            <Routes/>
        </Switch>
    );
};