const path = require("path")

const config = {
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index_bundle.js',
        library: "$",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};

module.exports = config;