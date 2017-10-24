import { computed, action } from 'mobx';
import pako from 'pako';
import { Base64 } from 'js-base64';
import Store from 'etc/Store';

class Ssr extends Store {
    @computed
    get state() {
        /* eslint-disable */
        const s = global.__state__;
        /* eslint-enable */

        if (s) {
            return JSON.parse(pako.inflate(Base64.decode(s), { to: 'string' }));
        }
        return s;
    }

    @computed
    get stateLoaded() {
        return !!this.state;
    }

    @action
    clear() {
        /* eslint-disable */
        global.__state__ = null;
        /* eslint-enable */
    }
}

export default new Ssr();
