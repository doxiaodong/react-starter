const webpackMerge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const commonConfig = require('./common');
const helpers = require('./helpers');

/* eslint-disable */
const ENV = process.env.ENV = process.env.NODE_ENV = 'production';
/* eslint-enable */
process.env.BABEL_ENV = 'prod';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'sourcemap',
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: `${helpers.static}[name].[chunkhash].js`,
        sourceMapFilename: '[file].map',
        chunkFilename: `${helpers.static}[id].[chunkhash].js`
    },
    plugins: [new MinifyPlugin()],
    node: false
});
