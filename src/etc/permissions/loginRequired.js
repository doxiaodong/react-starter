import routerStore from 'stores/router';
import withPermission from './utils';

function loginRequired() {
    return new Promise((resove, reject) => {
        setTimeout(() => {
            routerStore.push('/404');
            reject();
        }, 1000);
    });
}

export default function withLoginRequired(Component) {
    return withPermission(Component, loginRequired);
}
