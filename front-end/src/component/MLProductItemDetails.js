import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";
import "./MLProductItemDetails.sass"
import MLPrice from "./MLPrice";
import Button from "@material-ui/core/Button";
import {firstLetterToUpperCase} from "../utils/StringUtils";

export default (
    {
        product: {
            item: {
                picture, description, condition, sold_quantity: soldQuantity,
                title, price
            }
        }
    }) => {
    const ProductImage = () => {
        return (
            <Grid item xs={12} xl={8} md={8}>
                <Grid container alignContent="center" direction="column">
                    <Grid item className="ml-product-item-image-container">
                        <img src={picture} alt="product" className="ml-product-image"/>
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    const getTranslatedCondition = () => {
        let translatedCondition;
        switch (condition) {
            case "new":
                translatedCondition = "nuevo";
                break;
            case "used":
                translatedCondition = "usado";
                break;
            default:
                translatedCondition = condition;
                break;
        }
        return translatedCondition;
    };

    const ConditionAndSoldQuantity = () => {
        return (
            <Typography className="ml-product-detail-condition-quantity-text">
                {firstLetterToUpperCase(getTranslatedCondition()) + ` - ${soldQuantity} vendidos`}
            </Typography>
        );
    };

    const PurchaseContainer = () => {
        return (
            <Grid item xs={4}>
                <Grid container alignContent="flex-end" direction="column">
                    <Grid item>
                        <ConditionAndSoldQuantity/>
                        <Typography className="ml-product-detail-title-text">
                            {title}
                        </Typography>
                        <MLPrice price={price} className="ml-product-detail-price"/>
                        <Button className="ml-product-item-buy-button" disableElevation size="large" fullWidth>
                            Comprar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    };

    const ProductDetails = () => {
        return (
            <Grid item className="ml-product-item-description-container" xs={8}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography className="ml-product-item-detail-detail-title-placeholder">
                            Descripción del producto
                        </Typography>
                    </Grid>
                    <Grid item className="ml-product-item-description-grid">
                        <Grid container direction="row">
                            <Grid>
                                <Typography className="ml-product-item-description-text">
                                    {description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    };

    return (
        <Grid container className="ml-product-detail-container">
            <Grid container>
                <ProductImage/>
                <PurchaseContainer/>
            </Grid>
            <ProductDetails/>
        </Grid>
    );
}