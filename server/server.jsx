import path from 'path';
import fs from 'fs';
import React from 'react';
import { useStaticRendering } from 'mobx-react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes, matchRoutes } from 'react-router-config';
import express from 'express';
import { template } from 'lodash';
import { encode } from '../src/utils';
import routes from '../src/views/routes.jsx';

const distHtml = fs.readFileSync(
    path.resolve(__dirname, '../dist/index.html'),
    'utf-8'
);
const reEscape = /{%-([\s\S]+?)%}/g;
const reEvaluate = /{%([\s\S]+?)%}/g;
const reInterpolate = /{%=([\s\S]+?)%}/g;

useStaticRendering(true);

const app = express();
app.use('/static', express.static(path.resolve(__dirname, '../dist/static')));
app.get('*', async (req, res) => {
    const context = {};
    let state = {};
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route }) => {
        if (route.component && route.component.getInitialStoreState) {
            return route.component.getInitialStoreState({ req, res });
        }
        return Promise.resolve(null);
    });

    let stateArr = [];

    try {
        stateArr = await Promise.all(promises);
    } catch (error) {
        console.error('ssr prefetch error');
        state = null;
    }

    stateArr.forEach(s => {
        if (s) {
            Object.keys(s).forEach(k => {
                state[k] = s[k];
            });
        }
    });

    state = encode(state);

    // Important! force render dom without re permission if state is valid
    /* eslint-disable */
    global.__state__ = state;
    /* eslint-enable */

    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    );
    const responseHtml = template(distHtml, {
        escape: reEscape,
        evaluate: reEvaluate,
        interpolate: reInterpolate
    })({
        html,
        script: state ? `<script>window.__state__='${state}';</script>` : ''
    });
    res.write(responseHtml);
    res.end();
});
app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
