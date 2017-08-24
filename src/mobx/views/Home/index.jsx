import React, { Component } from 'react';
import { observer } from 'mobx-react';
import routerStore from 'stores/router';

import style from './style.styl';

@observer
export default class Home extends Component {
    componentDidMount() {
        console.log('home with match', this.props.match);
    }

    handleClick = () => {
        routerStore.push('/404');
    };

    render() {
        return (
            <div className={style.home}>
                <button type="button" onClick={this.handleClick}>
                    go to 404 by routerStore
                </button>
            </div>
        );
    }
}
