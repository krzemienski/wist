const path = require('path');

module.exports = {
    entry: './src/js/cli.js',
    target: 'node',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        library: '',
        libraryTarget: 'commonjs',
    },
    node: {
        __dirname: false
    }
};
