import { observable, extendObservable, action } from 'mobx';
import Store from 'etc/Store';
import replaceMethod from 'utils/replaceMethod';

export class Loadings extends Store {
    @observable names = [];
    @observable state = {};

    constructor(...names) {
        super();
        names.forEach(name => this.add(name));
    }

    @action
    add(name) {
        this.names.push(name);
        extendObservable(this.state, {
            [name]: false
        });
    }

    tryAdd(name) {
        /* eslint-disable */
        if (!this.state.hasOwnProperty(name)) {
        /* eslint-enable */
            this.add(name);
        }
    }

    @action
    start(name) {
        this.tryAdd(name);
        this.state[name] = true;
    }

    @action
    stop(name) {
        this.tryAdd(name);
        this.state[name] = false;
    }

    finished(name) {
        return !this.state[name];
    }

    allFinished() {
        return this.names.reduce(
            (finished, name) => finished && this.finished(name),
            true
        );
    }

    promise(name, promise) {
        this.start(name);
        const stopLoading = () => this.stop(name);
        promise.then(stopLoading, stopLoading);
        return promise;
    }

    handle(name) {
        this.tryAdd(name);
        /* tslint:disable */
        const loadings = this;
        /* tslint:enable */
        return replaceMethod(
            origin =>
                function repalce(...args) {
                    const promise = origin.apply(this, args);
                    return loadings.promise(name, promise);
                }
        );
    }
}

export default new Loadings();
