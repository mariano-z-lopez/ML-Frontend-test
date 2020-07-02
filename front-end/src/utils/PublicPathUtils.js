const GH_PAGES_PATH = "/ML-Frontend-test/";

export function getPublicPath(environment) {
    const path = environment === "production" ? GH_PAGES_PATH : "/";
    console.log("PATH", path);
    return path;
}
