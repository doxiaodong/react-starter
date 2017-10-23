import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import ssrStore from 'stores/ssr';
import Permission from './Permission';

export default function withPermission(Component, permission) {
    const C = () => (
        <Permission
            component={Component}
            permission={permission}
            forceShow={ssrStore.stateLoaded}
        />
    );

    C.displayName = `withPermission(${Component.displayName ||
        Component.name})`;

    return hoistStatics(C, Component);
}
