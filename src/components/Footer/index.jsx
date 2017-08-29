import React, { Component } from 'react';

export default class Footer extends Component {
    componentDidMount() {
        console.log('footer without match', this.props.match);
    }

    render() {
        return (
            <footer style={{ textAlign: 'center', background: 'yellow' }}>
                footer
            </footer>
        );
    }
}
