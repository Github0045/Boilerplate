const path = require('path');

module.exports = {
    entry: './main/main.js',
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'script.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'assets'),
        publicPath: '/js/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}