const fs = require('fs');
const path = require('path');

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
