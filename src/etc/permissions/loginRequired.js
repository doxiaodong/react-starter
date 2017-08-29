// import routerStore from 'stores/router';
import withPermission from './utils';

function loginRequired() {
    return new Promise(resolve => {
        setTimeout(() => {
            // routerStore.push('/404');
            resolve();
        }, 1000);
    });
}

export default function withLoginRequired(Component) {
    return withPermission(Component, loginRequired);
}
