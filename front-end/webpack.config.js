const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
const fs = require('fs');

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


module.exports = (env) => {
    const basePath = path.join(__dirname, '/.env');
    const envPath = basePath + '.' + env.ENVIRONMENT;
    const finalPath = fs.existsSync(envPath) ? envPath : basePath; // Check if the file exists, otherwise fall back to the production .env
    const fileEnv = dotenv.config({path: finalPath}).parsed; // Set the path parameter in the dotenv config

    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});

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
            path: path.join(__dirname, "/dist"),
            filename: "bundle.js"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.DefinePlugin(envKeys)
        ]
    }
};