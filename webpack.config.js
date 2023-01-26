const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: "/dist"
    },
    module: {
        rules: [
            {test: /\.scss$/, use: [miniCss.loader, 'css-loader', 'sass-loader']},
            {test: /\.(js)$/, use: 'babel-loader'},
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        compress: true,
        port: 8080,
    },
}
