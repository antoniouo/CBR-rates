const webpack = require("webpack");
const path = require("path");
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const commonPlugins = require('./common-plugins');
const {networkInterfaces} = require('os');

const netIfs = networkInterfaces();

let localIP = "127.0.0.1"

for (const key in netIfs) {
    const {address, family} = netIfs[key];

    if (family === "IPv4" && address !== localIP) {
        localIP = address;
        break;
    }
}

module.exports = merge(common, {
    mode: "development",
    devtool: 'eval-source-map',

    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
        open: "/"
    },
    plugins: [
        ...commonPlugins,
    ]
});