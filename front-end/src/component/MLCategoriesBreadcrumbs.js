import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./MLCategoriesBreadcrumbs.sass"
import {useSelector} from "react-redux";

export default () => {
    const {categories} = useSelector(state => ({
        categories: state.categories || [""]
    }));
    return (
        <Grid container justify="center" className="ml-categories-container">
            <Grid item xs={10}>
                <Breadcrumbs separator=">">
                    {categories.map(category => {
                        return <Typography key={category} className="ml-category-name">{category}</Typography>
                    })}
                </Breadcrumbs>
            </Grid>
        </Grid>
    );
}