import path from 'path';

export default {
    debug: false,
    webpack_assets_file_path: path.resolve(
        __dirname,
        '../dist/webpack-assets.json'
    ),
    webpack_stats_file_path: path.resolve(
        __dirname,
        '../dist/webpack-stats.json'
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
