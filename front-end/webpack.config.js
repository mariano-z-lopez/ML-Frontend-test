const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
const fs = require('fs');
const getPublicPath = require("./src/utils/PublicPathUtils")

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    },
    {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
    }
];

function getEnvFile(environment) {
    const basePath = path.join(__dirname, '/.env');
    const envPath = basePath + '.' + environment;
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    return fs.existsSync(finalPath)? dotenv.config({path: finalPath}).parsed : null;
}

module.exports = (env) => {
    const fileEnv = getEnvFile(env.ENVIRONMENT);

    const plugins = [new HtmlWebpackPlugin({
        template: "./public/index.html"
    })];

    if (typeof fileEnv != "undefined" && fileEnv !== null) {

        const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
            prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
            return prev;
        }, {});

        plugins.push(new webpack.DefinePlugin(envKeys))
    }

    return {
        entry: path.resolve(__dirname, "./src/index.js"),
        devServer: {
            contentBase: path.resolve(__dirname, "./src"),
            historyApiFallback: true
        },
        module: {
            rules
        },
        output: {
            path: path.join(__dirname, "/build"),
            filename: "bundle.js",
            publicPath: getPublicPath(env.ENVIRONMENT)
        },
        plugins: plugins
    }
};