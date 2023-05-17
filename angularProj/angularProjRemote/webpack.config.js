// const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        publicPath: 'http://localhost:4202/',
        uniqueName: 'angularProjRemote',
        scriptType: 'text/javascript',
    },
    module: {
        rules: [
          {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    optimization: {
        runtimeChunk: false,
    },
    devServer: {
        port: 4202,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true,
    },
}