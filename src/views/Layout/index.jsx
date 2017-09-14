import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { useStrict } from 'mobx';
import { renderRoutes } from 'react-router-config';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Toaster from 'components/Toaster';

import 'styles';
import style from './style.styl';

useStrict(true);

@observer
export default class Layout extends Component {
    render() {
        const { route: { routes } } = this.props;
        return (
            <div className="h100">
                <Header />
                <div className={style.container}>{renderRoutes(routes)}</div>
                <Footer />
                <Toaster />
            </div>
        );
    }
}

Layout.propTypes = {
    route: PropTypes.object.isRequired
};
