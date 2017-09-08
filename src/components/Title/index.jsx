import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
    componentDidMount() {
        this.updateTitle(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updateTitle(nextProps);
    }

    updateTitle(props) {
        const nextTitle = props.title || '';
        if (nextTitle !== document.title) {
            document.title = nextTitle;
        }
    }

    render() {
        return null;
    }
}

Title.propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    title: PropTypes.string.isRequired
    /* eslint-enable react/no-unused-prop-types */
};
