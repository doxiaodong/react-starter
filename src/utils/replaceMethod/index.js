export default function replaceMethod(replacer) {
    return (target, propertyKey, descriptor) => {
        /* eslint-disable */
        descriptor.value = replacer(descriptor.value);
        /* eslint-enable */
        return descriptor;
    };
}
