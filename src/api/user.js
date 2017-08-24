import fetchClient from 'etc/fetch';

export async function getUser1() {
    const data = await fetchClient.get('/users/doxiaodong');
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
    return data;
}

export function getUser2() {
    return fetchClient.get('/users/abc');
}
