import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React, {useState} from "react";
import "./MLAppBar.sass"
import logo from "../../public/Assets/Logo_ML.png"
import Grid from "@material-ui/core/Grid";
import MLSearchInput from "./MLSearchInput";
import {useHistory, withRouter} from "react-router-dom";
import {SEARCH_RESULT_URL} from "../router";

const MLAppBar = () => {
    let [appBarTextPlaceholder] = useState("Nunca dejes de buscar");
    let history = useHistory();

    const handleSearchChange = (query) => {
        history.push({
            pathname: SEARCH_RESULT_URL,
            search: `?search=${query}`,
        })
    };

    return (
        <AppBar position="static" className="ml-appBar">
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container  className="ml-logo-container" justify="center">
                            <Grid item className="ml-logo-grid" xl={1} md={1} xs={1}>
                                <img src={logo} alt="logo"/>
                            </Grid>
                            <Grid item className="ml-search-grid" xl={8} md={8} xs={6}>
                                <MLSearchInput placeholder={appBarTextPlaceholder} onChange={handleSearchChange}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(MLAppBar);