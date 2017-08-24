import { FetchClient } from 'intercept-fetch';
import interceptors from './interceptors';

const fetchClient = new FetchClient();
fetchClient.setInterceptors(interceptors);

export default fetchClient;
