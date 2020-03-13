const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const rootFolder = path.join(__dirname, '..');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        './src/index.js'
    ],
    mode: 'development',
    performance: {
        hints: false
    },
    output: {
        path: path.join(rootFolder, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        overlay: true,
        hot: true,
        historyApiFallback: true,
        port: 8080
    },
    plugins: [
        new MiniCssExtractPlugin('main.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: 'src/assets/images/favicon.ico',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules:
            [{
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                exclude: /node_modules/,
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(s?css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|ico|ttf|eot|woff|woff2|svg)$/,
                loader: 'url-loader'
            }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};