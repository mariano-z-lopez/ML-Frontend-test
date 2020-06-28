import Grid from "@material-ui/core/Grid";
import React from "react";
import "./MLProductItem.sass"
import Typography from "@material-ui/core/Typography";
import freeShippingLogo from "../../public/Assets/ic_shipping.png"
import ButtonBase from "@material-ui/core/ButtonBase";

export default ({product}) => {
    let {title, price, picture, free_shipping, address} = product;

    let formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: price.currency_id,
        minimumFractionDigits: price.decimals
    });


    const IsFreeShipping = () => {
        if (free_shipping) {
            return <img src={freeShippingLogo} alt="free-shipping"/>
        } else {
            return null;
        }
    };

    const ProductImage = () => {
        return (
            <Grid item className="ml-product-image-container">
                <ButtonBase className="ml-product-preview-image">
                <img src={picture} alt="product" className="ml-product-preview-image"/>
                </ButtonBase>
            </Grid>
        );
    };
    const getPrice = () => formatter.format(price.amount).replace(price.currency_id, "").replace(",", ".");

    const ProductInfo = () => {
        return (
            <Grid item className="ml-product-info-container" xl={6} md={6} xs={6}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container spacing={2} alignItems="baseline">
                            <Grid item>
                                <Typography variant="h5" className="ml-product-price">
                                    $ {getPrice()}
                                </Typography>
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
            <Grid item className="ml-product-address-info-container" xl={2} md={2} xs={2}>
                <Grid container alignItems="flex-end" direction="column">
                    <Grid item>
                        <Typography variant="caption" className="ml-product-address">{address.city_name}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid className="ml-product-container" container>
            <ProductImage/>
            <ProductInfo/>
            <AddressInfo/>
        </Grid>
    );
}