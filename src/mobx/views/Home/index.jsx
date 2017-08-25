import React, { Component } from 'react';
import { observer } from 'mobx-react';
import routerStore from 'stores/router';
import { withLoginRequired } from 'etc/permissions';
import Loading from 'components/Loading';

import store from './store';
import style from './style.styl';

@observer
class Home extends Component {
    // async componentWillMount() {
    //     try {
    //         await loginRequired();
    //     } catch (error) {
    //         routerStore.push('/404');
    //     }
    // }

    componentDidMount() {
        console.log('home with match', this.props.match);
        store.getUser1();
    }

    handleClick = () => {
        routerStore.push('/404');
    };

    render() {
        const { stringUser1, user2, loadings } = store;
        return (
            <div className={style.home}>
                {loadings.user1 && <Loading />}
                {!loadings.user1 &&
                    <p>
                        user1: {stringUser1}
                    </p>}
                <p>
                    use r2: {JSON.stringify(user2)}
                </p>
                <button type="button" onClick={this.handleClick}>
                    go to 404 by routerStore
                </button>
            </div>
        );
    }
}

export default withLoginRequired(Home);
