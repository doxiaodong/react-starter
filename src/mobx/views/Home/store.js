import { observable, computed, action, runInAction } from 'mobx';
import Store from 'etc/Store';
import { getUser1, getUser2 } from 'api/user';
import { Loadings } from 'stores/loadings';
import toasterStore from 'stores/toaster';

const loadings = new Loadings();

class Home extends Store {
    @computed
    get loadings() {
        return loadings.state;
    }

    @observable user1 = { a: 1 };
    @observable user2 = null;

    @computed
    get stringUser1() {
        return JSON.stringify(this.user1);
    }

    @action.bound
    @loadings.handle('user1')
    // @toasterStore.handle('request get user1 success')
    @toasterStore.handle()
    async getUser1() {
        const data = await getUser1();
        return runInAction('@action: getUser1', () => {
            this.user1 = data;
        });
    }

    @action.bound
    async getUser2() {
        const data = await getUser2();
        return runInAction('@action: getUser2', () => {
            this.user2 = data;
        });
    }
}

export default new Home();
