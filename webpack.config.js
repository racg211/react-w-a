const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const dev_MODE = process.env.NODE_ENV !== 'production'


module.exports = {
    entry: [
        './src/app/index.js',
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    dev_MODE ? 'style-loader' : miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new miniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]

}