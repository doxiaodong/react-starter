import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import routerStore from 'stores/router';

import style from './style.styl';

@observer
class Header extends Component {
    componentDidMount() {
        console.log('header with match', this.props.match);
    }

    render() {
        console.log('header watch routerStore', routerStore);
        return (
            <header className={style.header}>
                <ul className={style.ul}>
                    <li>
                        <Link to="/" className={style.link}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/404" className={style.link}>
                            404
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default withRouter(Header);
