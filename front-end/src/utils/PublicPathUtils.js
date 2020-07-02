const GH_PAGES_PATH = "/ML-Frontend-test/";

module.exports = (environment) => {
    const path = environment === "production" ? GH_PAGES_PATH : "/";
    console.log("PATH", path);
    return path;
};
