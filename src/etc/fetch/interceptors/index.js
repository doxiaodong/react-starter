import prefixInterceptor from './request';
import responseErrorInterceptor from './error';

export default prefixInterceptor.merge(responseErrorInterceptor);
