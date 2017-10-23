// TODO: is it possible to make this work ?
import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import LazyRoute from './LazyRoute';

export default function withLazyRoute(Component) {
    const C = () => <LazyRoute component={Component} />;

    C.displayName = `withLazyRoute(${Component.displayName || Component.name})`;

    return hoistStatics(C, Component);
}
