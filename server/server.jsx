import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';
import express from 'express';

import routes from '../src/views/routes.jsx';
import distHtml from '../dist/index.html';

const app = express();
app.use('/static', express.static(path.resolve(__dirname, '../dist/static')));
app.get('*', (req, res) => {
    const context = {};
    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    );
    res.write(
        distHtml.replace(
            '<div id="app" class="h100"></div>',
            `<div id="app" class="h100">${html}</div>`
        )
    );
    res.end();
});
app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
