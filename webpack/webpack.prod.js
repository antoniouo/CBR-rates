const TerserPlugin = require('terser-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const commonPlugins = require('./common-plugins');

module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
            })
        ],
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: commonPlugins
});