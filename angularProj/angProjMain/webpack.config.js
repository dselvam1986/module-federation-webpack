import { container } from 'webpack';
const deps = require('./package.json').dependencies;

module.exports = {
    output: {
      publicPath: 'http://localhost:4201/',
      uniqueName: 'angProjMain',
      scriptType: 'text/javascript',
    },
    optimization: {
      runtimeChunk: false,
    },
    devServer: {
      port: 4201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      hot: true,
    },
    plugins: [
      new container.ModuleFederationPlugin({
        name: 'angProj',
        remotes: {
          angular_app: `angRemote@http://localhost:4202/remoteEntry.js`,
          remote_app: `remote_app@http://localhost:4203/remoteEntry.js`,
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom/client': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    ],
  };