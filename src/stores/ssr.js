import { computed, action } from 'mobx';
import Store from 'etc/Store';

class Ssr extends Store {
    @computed
    get ssr() {
        return global.$ssr$;
    }

    @action
    clear() {
        global.$ssr$ = null;
    }
}

export default new Ssr();
