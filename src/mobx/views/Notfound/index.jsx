import React, { Component } from 'react';

export default class Notfound extends Component {
    componentDidMount() {
        console.log('notfound with match', this.props.match);
    }

    render() {
        return <div>Notfound</div>;
    }
}
