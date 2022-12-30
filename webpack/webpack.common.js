const path = require("path");
const { createWebpackAlias } = require("./utils");

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                // Подгрузка LESS файлов.
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader", // compiles Less to CSS
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: createWebpackAlias(),
    resolveLoader: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "[name].js",
        sourceMapFilename: "[file].map",
        chunkFilename: "[id].[contenthash].js",
    },
};