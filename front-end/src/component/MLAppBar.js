import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React, {useEffect, useState} from "react";
import "./MLAppBar.sass"
import logo from "../../public/Assets/Logo_ML.png"
import Grid from "@material-ui/core/Grid";
import MLSearchInput from "./MLSearchInput";
import {useHistory, withRouter} from "react-router-dom";
import {PUBLIC_URL, SEARCH_RESULT_URL} from "../router";

const MLAppBar = () => {
    let [state, setState] = useState({
        appBarTextPlaceholder: "Nunca dejes de buscar",
        querySearch: null
    });
    let history = useHistory();


    const setQuerySearch = (query) => {
        setState({
            ...state,
            querySearch: query
        })
    };

    const dispatchSearch = () => {
        let {querySearch: query} = state;
        if (query) {
            history.push({
                pathname: PUBLIC_URL + SEARCH_RESULT_URL,
                search: `?search=${query}`,
            })
        }
    };

    useEffect(dispatchSearch, [state.querySearch]);

    return (
        <Grid container className="ml-appBar-container">
            <Grid item xs={12}>
                <AppBar position="static" className="ml-appBar">
                    <Toolbar>
                        <Grid container justify="center">
                            <Grid item xl={1} md={1} xs={2}>
                                <Grid container alignItems="center" justify="center">
                                    <Grid item className="ml-logo-grid">
                                        <img src={logo} alt="logo"/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item className="ml-search-grid" xl={8} md={8} xs={8}>
                                <MLSearchInput placeholder={state.appBarTextPlaceholder}
                                               onChange={setQuerySearch}
                                               onClick={dispatchSearch}/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    );
};

export default withRouter(MLAppBar);