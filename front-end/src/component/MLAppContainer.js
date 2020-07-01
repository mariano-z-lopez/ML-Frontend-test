import React from "react";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

export default ({children}) => {
    return (
        <Box className="ml-app-container">
            <Grid container spacing={2} justify="center">
                <Grid item xs={10}>
                    <Paper>
                        {children}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}