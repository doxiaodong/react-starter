import { observable, action } from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';
import Store from 'etc/Store';

class Router extends Store {
    @observable location = null;
    history = null;

    @action
    updateLocation(location) {
        this.location = location;
    }

    constructor(history) {
        super();
        this.history = history;
        const handleLocationChange = location => {
            this.updateLocation(location);
        };

        this.history.listen(handleLocationChange);
    }

    push(location) {
        this.history.push(location);
    }
    replace(location) {
        this.history.replace(location);
    }
    go(n) {
        this.history.go(n);
    }
    goBack() {
        this.history.goBack();
    }
    goForward() {
        this.history.goForward();
    }
}

const browserHistory = createBrowserHistory();

export default new Router(browserHistory);
