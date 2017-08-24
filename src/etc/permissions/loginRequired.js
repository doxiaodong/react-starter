export default function loginRequired() {
    return new Promise(resove => {
        setTimeout(() => {
            resove();
        }, 0);
    });
}
