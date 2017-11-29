import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title';

import style from './style.scss';

export default class Page extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className={style.page}>
                <Title title={title} />
                {this.props.children}
            </div>
        );
    }
}

Page.propTypes = {
    title: PropTypes.string.isRequired
};
