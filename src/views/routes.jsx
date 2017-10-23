// import React from 'react';
// import { LazyRoute } from 'etc/LazyRoute';
import Layout from 'views/Layout';
import LoginRequiredHome from 'views/Home';
import Notfound from 'views/Notfound';

// Dynamic
// Notice: Dynamic route cannot render by ssr, so use Notfound instead
// Maybe this https://github.com/thejameskyle/react-loadable
// const DynamicNotfound = () => <LazyRoute component={import('./Notfound')} />;

const routes = [
    {
        component: Layout,
        routes: [
            {
                path: '/',
                exact: true,
                component: LoginRequiredHome
            },
            {
                path: '/404',
                exact: true,
                component: Notfound
            }
        ]
    }
];

export default routes;
