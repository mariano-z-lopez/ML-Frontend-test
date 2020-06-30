export const countDecimals = (value) => {
    if (typeof value !== "number" || Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
};