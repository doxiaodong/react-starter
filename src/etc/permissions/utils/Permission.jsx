import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';

export default class Permission extends Component {
    state = {
        allow: false
    };

    componentDidMount() {
        if (!this.props.forceShow) {
            this.loadPermission();
        }
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
        const { component: C, forceShow } = this.props;
        if (this.state.allow || forceShow) {
            return <C />;
        }
        return <Loading />;
    }
}

Permission.propTypes = {
    component: PropTypes.any.isRequired,
    permission: PropTypes.any.isRequired,
    forceShow: PropTypes.bool
};

Permission.defaultProps = {
    forceShow: false
};
