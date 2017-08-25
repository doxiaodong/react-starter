import { FetchClient } from 'intercept-fetch';
import interceptors from './interceptors';

const fetchClient = new FetchClient();
fetchClient.setInterceptors(interceptors);
// fetchClient.setTimeout(10);

export default fetchClient;
