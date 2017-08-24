const path = require('path');
const autoprefixer = require('autoprefixer');

const ROOT = path.resolve(__dirname, '..');
const root = path.join.bind(path, ROOT);

function postCSSPlugins() {
    return [
        autoprefixer({
            browsers: ['last 1 version', '> 10%']
        })
    ];
}

module.exports = {
    root,
    static: 'assets/',
    postCSSPlugins
};
