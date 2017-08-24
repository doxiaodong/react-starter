import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LazyRoute from 'etc/LazyRoute';
import Layout from 'views/Layout';
import Home from 'views/Home';

// lazyload
const Notfound = props =>
    <LazyRoute {...props} component={import('./Notfound')} />;

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/404" render={Notfound} />
                    <Route render={() => <Redirect to="/404" />} />
                </Switch>
            </Layout>
        );
    }
}
