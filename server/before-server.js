const fetch = require('node-fetch');
const register = require('babel-register');

if (!global.fetch) {
    global.fetch = fetch;
    global.Response = fetch.Response;
    global.Headers = fetch.Headers;
    global.Request = fetch.Request;
}

register({
    // ignore if use lodash-es
    // ignore: /node_modules\/(?!lodash-es)/
});
