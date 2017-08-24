const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./common');
const helpers = require('./helpers');

/* eslint-disable */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
/* eslint-enable */
process.env.BABEL_ENV = 'dev';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'eval',
    entry: ['react-hot-loader/patch', './src/mobx/index.jsx'],
    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        hot: true,
        port: 3000,
        host: '0.0.0.0',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
});
