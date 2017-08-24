const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlElementsPlugin = require('./plugin/html-elements');
const helpers = require('./helpers');
const headTags = require('./head');

module.exports = option => {
    const env = option.env;
    const isProd = env === 'production';
    return {
        entry: {
            main: './src/mobx/index.jsx'
        },
        resolve: {
            modules: ['node_modules', './src', './src/mobx', './src/redux'],
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.styl$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    minimize: isProd,
                                    sourceMap: true,
                                    localIdentName: '[local]__[hash:base64:6]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: helpers.postCSSPlugins,
                                    sourceMap: true
                                }
                            },
                            'stylus-loader'
                        ]
                    })
                },
                {
                    test: /\.stylus$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: false,
                                    minimize: isProd,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: helpers.postCSSPlugins,
                                    sourceMap: true
                                }
                            },
                            'stylus-loader'
                        ]
                    })
                }
            ]
        },
        plugins: [
            new HtmlElementsPlugin({ headTags }),
            new ExtractTextPlugin(`${helpers.static}main.[hash].css`),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'lib',
                chunks: ['main'],
                minChunks: module => /node_modules/.test(module.resource)
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['lib']
            }),
            new webpack.DefinePlugin({
                ENV: JSON.stringify(env)
            }),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                minify: {
                    minifyCSS: true,
                    minifyJS: true,
                    collapseWhitespace: true,
                    removeComments: true
                },
                chunksSortMode: 'dependency'
            })
        ]
    };
};
