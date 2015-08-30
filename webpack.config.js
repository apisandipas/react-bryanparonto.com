var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'src/app.js',
    out: 'build',
    clearBeforeBuild: true,
    module: {
        loaders: [
            {
              test: /\.scss$/,
              loader: 'style!css!sass'
            },
            {
                test: /\.js?$/,
                loader: 'eslint-loader',
                include: 'src/app.js'
            }
        ]
    }
})
