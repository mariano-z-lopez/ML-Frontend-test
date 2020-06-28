import IconButton from "@material-ui/core/IconButton";
import searchIcon from "../../public/Assets/ic_Search.png";
import React from "react";
import "./MLSearchInput.sass"
import TextFieldRx from "./TextFieldRx";

export default ({placeholder, onChange}) => {
    return (
        <TextFieldRx
            fullWidth
            onChange={onChange}
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
    );
}