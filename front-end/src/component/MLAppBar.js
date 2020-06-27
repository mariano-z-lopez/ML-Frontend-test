import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import "./MLAppBar.sass"
import logo from "../../public/Assets/Logo_ML.png"

import Grid from "@material-ui/core/Grid";
import MLSearchInput from "./MLSearchInput";

export default ({placeholder}) => {
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
                                <MLSearchInput placeholder={placeholder}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}