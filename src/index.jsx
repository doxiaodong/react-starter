import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from 'views/client';

const hotRender = Component =>
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );

hotRender(App);
if (module.hot) {
    module.hot.accept('./views/client', async () => {
        const { default: NewApp } = await import('./views/client');
        hotRender(NewApp);
    });
}
