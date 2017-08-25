import requestInterceptor from './request';
import errorInterceptor from './error';

export default requestInterceptor.merge(errorInterceptor);
