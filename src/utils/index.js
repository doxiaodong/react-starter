import pako from 'pako';
import { Base64 } from 'js-base64';

// encode ssr __state__
export function encode(obj) {
    if (!obj) {
        return obj;
    }
    return Base64.encode(pako.deflate(JSON.stringify(obj), { to: 'string' }));
}

// decode ssr __state__
export function decode(str) {
    if (!str) {
        return str;
    }
    return JSON.parse(pako.inflate(Base64.decode(str), { to: 'string' }));
}
