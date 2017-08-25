import withPermission from './utils';

function managerRequired() {
    return Promise.reject();
}

export default function withManagerRequired(Component) {
    return withPermission(Component, managerRequired);
}
