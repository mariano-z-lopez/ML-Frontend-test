import {countDecimals} from "../../utils/NumbersUtils";

export default ({price: amount, currency_id}) => ({
    amount,
    currency_id,
    decimals: countDecimals(amount)
});