import { container } from 'webpack';
const deps = require('./package.json').dependencies;

module.exports = {
    output: {
      publicPath: 'http://localhost:4202/',
      uniqueName: 'angRemote',
      scriptType: 'text/javascript',
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
    plugins: [
        new container.ModuleFederationPlugin({
            name: 'angRemote',
            library: { type: 'var', name: 'angRemote' },
            filename: 'remoteEntry.js',
            exposes: {
                './AngRemoteModule': './src/app/app.module.ts'
            }
        }),
    ],
};