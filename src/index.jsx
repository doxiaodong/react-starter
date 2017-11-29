import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { useStrict } from 'mobx';
import App from 'views/App';
import routerStore from 'stores/router';
import ssrStore from 'stores/ssr';
import createBrowserHistory from 'history/createBrowserHistory';

useStrict(true);
const history = createBrowserHistory();
routerStore.setHistory(history);

const hotRender = Component =>
    (ssrStore.stateLoaded ? hydrate : render)(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );

hotRender(App);
if (module.hot) {
    module.hot.accept('./views/App', async () => {
        const { default: NewApp } = await import('./views/App');
        hotRender(NewApp);
    });
}
