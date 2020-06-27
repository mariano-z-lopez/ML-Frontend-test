import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import searchIcon from "../../public/Assets/ic_Search.png";
import Grid from "@material-ui/core/Grid";
import React from "react";
import "./MLSearchInput.sass"

export default ({placeholder, xl=8, md=8, xs=10}) => {
    return (
        <Grid item className="ml-search-grid" xl={xl} md={md} xs={xs}>
            <TextField
                fullWidth
                placeholder={placeholder}
                variant="standard"
                className=".ml-search-input"
                InputProps={{
                    endAdornment:
                        <IconButton className="ml-icon-button">
                            <img src={searchIcon} alt="search" className="ml-search-icon-container"/>
                        </IconButton>,
                }}
            />
        </Grid>
    );
}