import { Interceptor } from 'intercept-fetch';

const requestInterceptor = new Interceptor({
    prefix: {
        request(url, config) {
            return Promise.resolve([ENV.API_PREFIX + url, config]);
        }
    }
});

export default requestInterceptor;
