const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: './',
    },
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:
        {
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@logos': path.resolve(__dirname, 'src/assets/logos'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: 
                [
                    {
                        loader: 'html-loader',
                        options: 
                        {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: 
                [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3005,
    }
}