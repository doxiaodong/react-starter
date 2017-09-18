import path from 'path';
import fetch from 'node-fetch';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import isomorphicConfig from './isomorphic';
import ENV from '../env/prod.json';

if (!global.fetch) {
    global.fetch = fetch;
    global.Response = fetch.Response;
    global.Headers = fetch.Headers;
    global.Request = fetch.Request;
}
global.ENV = ENV;
global.webpackIsomorphicTools = new WebpackIsomorphicTools(
    isomorphicConfig
).server(path.resolve(__dirname, '..'), () => {
    /* eslint-disable */
    require('./server.jsx');
    /* eslint-disable */
});
