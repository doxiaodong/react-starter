import path from 'path';
import React from 'react';
import { useStaticRendering } from 'mobx-react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';
import express from 'express';

import routes from '../src/views/routes.jsx';
import distHtml from '../dist/index.html';
import appStores from './$appStores$';

useStaticRendering(true);

const app = express();
app.use('/static', express.static(path.resolve(__dirname, '../dist/static')));
app.get('*', async (req, res) => {
    const context = {};
    const $appStores$ = {};
    if (appStores[req.url]) {
        const { store, name } = appStores[req.url];
        await store.$serverLoad$();
        $appStores$[name] = store.$toJSON$();
    }
    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    );
    res.write(
        distHtml.replace(
            '<div id="app" class="h100"></div>',
            `<div id="app" class="h100">${html}</div>
<script>
    window.$ssr$=true;window.$appStores$=${JSON.stringify($appStores$)};
</script>`
        )
    );
    res.end();
});
app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
