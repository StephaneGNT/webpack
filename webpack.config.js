const path = require('path');

module.exports = {
    entry: {
        app: './js/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    mode: 'production',

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader", // compiles Sass to CSS
            ],
        }]
    }
}