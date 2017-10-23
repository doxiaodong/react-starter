import { action, observable, computed } from 'mobx';
import Store from 'etc/Store';
import replaceMethod from 'utils/replaceMethod';

function makeItem(item, type) {
    if (typeof item === 'string') {
        return {
            type,
            title: item
        };
    }
    return { ...item, type };
}

export class Toaster extends Store {
    @observable queue = [];

    @computed
    get current() {
        const all = this.queue;
        return all[all.length - 1];
    }

    @action
    add(item) {
        this.queue.push(item);
        return Promise.resolve(null);
    }

    @action
    remove(item) {
        const index = this.queue.indexOf(item);
        if (index >= 0) {
            this.queue.splice(index, 1);
        }
        return Promise.resolve(null);
    }

    info(item) {
        return this.add(makeItem(item, 'info'));
    }

    success(item) {
        return this.add(makeItem(item, 'success'));
    }

    warning(item) {
        return this.add(makeItem(item, 'warning'));
    }

    error(item) {
        return this.add(makeItem(item, 'error'));
    }

    wait(item) {
        return this.add(makeItem(item, 'wait'));
    }

    getLevels(levels) {
        return {
            resolve: 'success',
            reject: 'error',
            ...levels
        };
    }

    exception(exception, failureText, levels) {
        const shadowLevels = this.getLevels(levels);

        const message = failureText || exception; // TODO: do with exception
        console.warn('[EXCEPTION]', `${message}:`, exception);
        this[shadowLevels.reject](message);
    }

    promise(promise, successText, failureText, levels) {
        const shadowLevels = this.getLevels(levels);
        promise.then(
            () => successText && this[shadowLevels.resolve](successText),
            exception => this.exception(exception, failureText, shadowLevels)
        );
        return promise;
    }

    handle(successText, failureText, levels) {
        const shadowLevels = this.getLevels(levels);
        const me = this;
        return replaceMethod(
            origin =>
                function replace(...args) {
                    const promise = origin.apply(this, args);
                    return me.promise(
                        promise,
                        successText,
                        failureText,
                        shadowLevels
                    );
                }
        );
    }

    handleInfo(successText, failureText) {
        return this.handle(successText, failureText, { resolve: 'info' });
    }
}

export default new Toaster();
