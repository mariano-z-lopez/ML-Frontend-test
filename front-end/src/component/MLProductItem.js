import Grid from "@material-ui/core/Grid";
import React from "react";
import "./MLProductItem.sass"
import Typography from "@material-ui/core/Typography";
import freeShippingLogo from "../../public/Assets/ic_shipping.png"
import MLPrice from "./MLPrice";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paddingMediaQuery: {
        [theme.breakpoints.down('sm')]: {
            padding: 15,
        },
        [theme.breakpoints.up('md')]: {
            padding: 0,
            paddingTop: 50
        },
        [theme.breakpoints.up('lg')]: {
            padding: 0,
            paddingTop: 50
        },
    },
}));

export default ({product, handleOnProductClick}) => {
    let {title, price, picture, free_shipping, address: {city_name}} = product;
    const classes = useStyles();

    const IsFreeShipping = () => {
        if (free_shipping) {
            return <img src={freeShippingLogo} alt="free-shipping"/>
        } else {
            return null;
        }
    };

    const ProductImage = () => {
        return (
            <Grid item className="ml-product-image-container" xs={12} xl={2} md={4}>
                <img src={picture} alt="product" className="ml-product-preview-image"/>
            </Grid>
        );
    };

    const ProductInfo = () => {
        return (
            <Grid item className={`${classes.paddingMediaQuery} ml-product-info-container`} xl={6} md={6} xs={8}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container spacing={2} alignItems="baseline">
                            <Grid item>
                                <MLPrice price={price} />
                            </Grid>
                            <Grid item>
                                <IsFreeShipping/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className="ml-product-title-container">
                        <Typography variant="subtitle1" className="ml-product-title">{title}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    const AddressInfo = () => {
        return (
            <Grid item className={classes.paddingMediaQuery} xl={2} md={1} xs={2}>
                <Grid container alignItems="flex-end" direction="column">
                    <Grid item>
                        <Typography variant="caption" className="ml-product-address">{city_name}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    const ProductDivider = () => {
        return (
            <Grid item xs={12} className="ml-product-divider-grid">
                <Divider/>
            </Grid>
        );
    };

    return (
        <Grid container onClick={handleOnProductClick}>
            <ProductImage/>
            <ProductInfo/>
            <AddressInfo/>
            <ProductDivider/>
        </Grid>
    );
}