import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';

export default class LazyRoute extends Component {
    state = {
        loaded: false
    };

    componentDidMount() {
        this.loadComponent();
    }

    async loadComponent() {
        // TODO: resolve load module error
        const module = await this.props.component;
        this.component = module.default;
        this.setState({ loaded: true });
    }

    render() {
        const { loaded } = this.state;
        const { component, ...others } = this.props;
        if (loaded) {
            return <this.component {...others} />;
        }
        return <Loading />;
    }
}

LazyRoute.propTypes = {
    component: PropTypes.any.isRequired
};
