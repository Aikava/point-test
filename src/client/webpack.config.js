const path = require('path');
const TsConfigPathsPlugins = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    target: 'web',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist') },
    resolve: {
        extensions: ['.js', '.ts'],
        plugins: [
            new TsConfigPathsPlugins()
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { transpileOnly: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.hbs$/,
                exclude: /node_modules/,
                use: 'handlebars-loader'
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: './dist',
        port: 8081
    }
};
