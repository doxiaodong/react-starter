import React, { Component } from 'react';
import Page from 'components/Page';

export default class Notfound extends Component {
    componentDidMount() {
        console.log('notfound with match', this.props.match);
    }

    render() {
        return (
            <Page title="404">
                <div>Notfound</div>
            </Page>
        );
    }
}
