import path from 'path';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import isomorphicConfig from './isomorphic';
import ENV from './env.json';

// TODO: support { "ENV.API_PREFIX": "https://api.github.com" }
// https://github.com/webpack/webpack/blob/master/lib/DefinePlugin.js
Object.keys(ENV).forEach(key => {
    global[key] = ENV[key];
});
global.webpackIsomorphicTools = new WebpackIsomorphicTools(
    isomorphicConfig
).server(path.resolve(__dirname, '..'), () => {
    /* eslint-disable */
    require('./server.jsx');
    /* eslint-disable */
});
