import React, { Component } from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import toasterStore from 'stores/toaster';

@observer
export default class Toaster extends Component {
    componentDidMount() {
        reaction(
            () => toasterStore.current,
            current => {
                if (current) {
                    // TODO: add toaster component
                    console.error(current);
                }
            }
        );
    }

    render() {
        return <div />;
    }
}
