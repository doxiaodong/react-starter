import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LazyRoute extends Component {
    state = {
        loaded: false
    };

    componentDidMount() {
        this.loadComponent();
    }

    async loadComponent() {
        const module = await this.props.component;
        this.component = module.default;
        this.setState({ loaded: true });
    }

    render() {
        const { loaded } = this.state;
        if (loaded) {
            return <this.component {...this.props} />;
        }
        // TODO: set loading
        return <div />;
    }
}

LazyRoute.propTypes = {
    component: PropTypes.any.isRequired
};
