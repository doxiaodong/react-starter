import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { renderRoutes } from 'react-router-config';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Toaster from 'components/Toaster';

import style from './style.scss';
import avatar from './avatar.jpeg';
import w1 from './w1.png';
import w2 from './w2.jpg';

@observer
export default class Layout extends Component {
    render() {
        const { route: { routes } } = this.props;
        return (
            <div className="h100">
                <Header />
                <div className={style.container}>
                    <div className="pictures">
                        <img src={avatar} alt="avatar" />
                        <img src={w1} alt="w1" />
                        <img src={w2} alt="w2" />
                    </div>
                    {renderRoutes(routes)}
                </div>
                <Footer />
                <Toaster />
            </div>
        );
    }
}

Layout.propTypes = {
    route: PropTypes.object.isRequired
};
