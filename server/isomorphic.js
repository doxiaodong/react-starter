const path = require('path');

module.exports = {
    debug: false,
    webpack_assets_file_path: path.resolve(
        __dirname,
        '../dist/webpack-assets.json'
    ),
    assets: {
        images: {
            extensions: ['png', 'jpg', 'gif', 'jpeg']
        },
        fonts: {
            extensions: ['woff', 'woff2', 'ttf', 'eot']
        },
        styleModules: {
            extensions: ['less', 'scss', 'styl'],
            parser: module => module.source
        }
    }
};
