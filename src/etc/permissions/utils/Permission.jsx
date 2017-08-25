import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';

export default class Permission extends Component {
    state = {
        allow: false
    };

    componentDidMount() {
        this.component = this.props.component;
        this.loadPermission();
    }

    async loadPermission() {
        let state = false;
        try {
            await this.props.permission();
            state = true;
        } catch (error) {
            console.warn('permission error: ', error);
        }
        if (state) {
            this.setState({ allow: state });
        }
    }

    render() {
        if (this.state.allow) {
            return <this.component />;
        }
        return <Loading />;
    }
}

Permission.propTypes = {
    component: PropTypes.any.isRequired,
    permission: PropTypes.any.isRequired
};
