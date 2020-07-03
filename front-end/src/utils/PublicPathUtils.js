module.exports = () => {
    const path = process.env.PUBLIC_PATH || "/";
    console.log("PATH", path);
    return path;
};
