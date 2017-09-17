import React from 'react';
import Layout from 'views/Layout';
import LoginRequiredHome from 'views/Home';
// import Notfound from 'views/Notfound';

import LazyRoute from 'etc/LazyRoute';

// Dynamic
// const DynamicNotfound = props => (
//     <LazyRoute {...props} component={import('./Notfound')} />
// );
// TODO: Dynamic import cannot run in ssr
// TODO: Dynamic Route cannot be render in ssr
const DynamicNotfound = props => {
    const component = new Promise(resolve => {
        /* eslint-disable */
        require.ensure([], () => {
            resolve(require('./Notfound'));
        });
        /* eslint-enable */
    });
    return <LazyRoute {...props} component={component} />;
};

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
                component: DynamicNotfound
            }
        ]
    }
];

export default routes;
