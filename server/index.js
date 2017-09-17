import path from 'path';
import fetch from 'node-fetch';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import isomorphicConfig from './isomorphic';

global.fetch = fetch;
global.webpackIsomorphicTools = new WebpackIsomorphicTools(
    isomorphicConfig
).server(path.resolve(__dirname, '..'), () => {
    /* eslint-disable */
    require('./server.jsx');
    /* eslint-disable */
});
