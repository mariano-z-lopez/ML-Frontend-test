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

    return dotenv.config({path: finalPath}).parsed;
}

module.exports = (env) => {
    const fileEnv = getEnvFile(env.ENVIRONMENT);

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
            path: path.join(__dirname, "/build"),
            filename: "bundle.js",
            publicPath: getPublicPath(env.ENVIRONMENT)
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.DefinePlugin(envKeys)
        ],
        //target: 'node', // in order to ignore built-in modules like path, fs, etc.
        //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    }
};