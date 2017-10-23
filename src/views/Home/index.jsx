import React, { Component } from 'react';
import { observer } from 'mobx-react';
import routerStore from 'stores/router';
import { withLoginRequired } from 'etc/permissions';
import Loading from 'components/Loading';
import Page from 'components/Page';

import ssrStore from 'stores/ssr';
import store from './store';
import style from './style.styl';

@observer
class Home extends Component {
    static async getInitialStoreState() {
        // TODO: add LoginPermisson here, maybe
        // await userStore.userInfo()
        // relative withLoginRequired loginRequired function
        await store.getUser1();
        return {
            home: {
                user1: store.user1,
                user2: store.user2
            }
        };
    }

    componentDidMount() {
        console.log('home with match', this.props.match);
        if (!ssrStore.stateLoaded) {
            store.getUser1();
        }
    }

    handleClick = () => {
        routerStore.push('/404');
    };

    render() {
        const { stringUser1, user2, loadings } = store;
        return (
            <Page title="Home">
                <div className={style.home}>
                    {loadings.user1 && <Loading />}
                    {!loadings.user1 && <p>user1: {stringUser1}</p>}
                    <p>user2: {JSON.stringify(user2)}</p>
                    <button type="button" onClick={this.handleClick}>
                        go to 404 by routerStore
                    </button>
                </div>
            </Page>
        );
    }
}

export default withLoginRequired(Home);
