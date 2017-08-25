import { Interceptor } from 'intercept-fetch';

const errorInterceptor = new Interceptor({
    responseError: {
        error(error) {
            console.log(error);
            return Promise.reject(error);
        }
    },
    requestError: {
        requestError(error) {
            console.log('requsetError', error);
            return Promise.reject(error);
        }
    },
    timeout: {
        timeout(url) {
            console.log('timeout', url);
            return Promise.reject(url);
        }
    }
});

export default errorInterceptor;
