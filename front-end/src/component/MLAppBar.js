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
                <Grid container className="ml-logo-container">
                    <Grid item className="ml-logo-grid" xl={2} md={2} xs={2}>
                        <img src={logo} alt="logo"/>
                    </Grid>
                    <MLSearchInput placeholder={placeholder}/>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}