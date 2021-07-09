const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production'

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[hash].bundle.js',
        clean: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "less-loader"
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|gif)/,
                type: 'asset/resource'
            },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[hash].css'
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        mainFiles: ["index"],
    },
    mode: mode
}