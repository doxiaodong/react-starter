import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routerStore from 'stores/router';

import 'styles';
import routes from './routes';

export default class App extends Component {
    render() {
        return (
            <Router history={routerStore.history}>
                {renderRoutes(routes)}
            </Router>
        );
    }
}
