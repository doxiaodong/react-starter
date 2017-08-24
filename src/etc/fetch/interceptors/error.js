import { Interceptor } from 'intercept-fetch';

const responseErrorInterceptor = new Interceptor({
    responseError: {
        error(error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
});

export default responseErrorInterceptor;
