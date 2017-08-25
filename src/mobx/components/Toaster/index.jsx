import React, { Component } from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import toasterStore from 'stores/toaster';

import './style.styl';

@observer
export default class Loading extends Component {
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
