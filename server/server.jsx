import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';
import express from 'express';
import history from 'connect-history-api-fallback';

import routes from '../src/views/routes.jsx';

const { javascript, styles } = global.webpackIsomorphicTools.assets();

const app = express();
app.get('/', (req, res) => {
    const context = {};
    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    );
    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.write(`
            <!doctype html>
            <html>
                <head>
                    <link rel="stylesheet" href="${styles.index}">
                </head>
                <body>
                    ${html}
                    <script src="${javascript.index}"></script>
                </body>
            </html>
            ${html}
        `);
        res.end();
    }
});
app.use(history());
app.use('/static', express.static(path.resolve(__dirname, '../dist/static')));
app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
