// import React from 'react';
import Layout from 'views/Layout';
import LoginRequiredHome from 'views/Home';
import Notfound from 'views/Notfound';

// import LazyRoute from 'etc/LazyRoute';

// lazyload
// const DynamicNotfound = props => (
//     <LazyRoute {...props} component={import('./Notfound')} />
// );

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
