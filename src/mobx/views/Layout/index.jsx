import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Router } from 'react-router-dom';
import routerStore from 'stores/router';
import Header from 'views/Header';
import Footer from 'views/Footer';

import style from './style.styl';

@observer
export default class Layout extends Component {
    render() {
        return (
            <Router history={routerStore.history}>
                <div className="h100">
                    <Header />
                    <div className={style.container}>
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}
