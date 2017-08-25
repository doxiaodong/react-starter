import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loading extends Component {
    render() {
        const { desc } = this.props;
        return (
            <div>
                {desc}
            </div>
        );
    }
}

Loading.propTypes = {
    desc: PropTypes.string
};

Loading.defaultProps = {
    desc: 'loading...'
};
