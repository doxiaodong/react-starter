import React, { Component } from 'react';
import { useStrict } from 'mobx';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routerStore from 'stores/router';
import createBrowserHistory from 'history/createBrowserHistory';

import 'styles';
import routes from './routes';

useStrict(true);
const history = createBrowserHistory();
routerStore.setHistory(history);

export default class App extends Component {
    render() {
        return <Router history={history}>{renderRoutes(routes)}</Router>;
    }
}
