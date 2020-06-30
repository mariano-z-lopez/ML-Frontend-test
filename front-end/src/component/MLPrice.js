import Typography from "@material-ui/core/Typography";
import React from "react";
import "./MLPrice.sass"

export default ({price: {amount, currency_id: currency, decimals}, className},...rest) => {
    let formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals
    });

    const getPrice = () => {
        return formatter
            .format(amount)
            .replace(currency, "")
            .replace(",", ".");
    };

    return (
        <Typography className={`ml-product-price ${className}`} {...rest}>
            {`$${getPrice()}`}
        </Typography>
    );
}