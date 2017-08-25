import React from 'react';
import Permission from './Permission';

export default function withPermission(Component, permission) {
    return function comp() {
        return <Permission component={Component} permission={permission} />;
    };
}
