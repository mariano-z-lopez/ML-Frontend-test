import Typography from "@material-ui/core/Typography";
import React from "react";
import "./MLPrice.sass"

export default ({price: {amount, currency_id: currency, decimals}, className}) => {
    let formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    const getFormattedPrice = () => {
        return formatter
            .format(amount)
            .replace(currency, "")
            .replace(",", ".")
    };

    const getDecimals = () => {
        let stringDecimals;

        if (decimals !== 0) {
            let stringAmount = amount.toString();
            stringDecimals = stringAmount.substring(stringAmount.length - decimals);
        } else {
            stringDecimals = "00"
        }

        return stringDecimals;

    };

    return (
        <Typography className={`ml-product-price ${className}`}>
            {`$ ${getFormattedPrice()}`}
            <sup className="ml-product-price-decimals">{getDecimals()}</sup>
        </Typography>
    );
}