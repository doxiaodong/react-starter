const fs = require('fs');
const path = require('path');

require.extensions['.html'] = (module, filename) => {
    /* eslint-disable */
    module.exports = fs.readFileSync(filename, 'utf8');
    /* eslint-enable */
};

const babelrc = fs.readFileSync(
    path.resolve(__dirname, '../.babelrc'),
    'utf-8'
);
let config;

try {
    config = JSON.parse(babelrc);
} catch (error) {
    console.log(error);
}

require('babel-register')(config);
