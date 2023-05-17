import { container } from 'webpack';

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js'],
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
        './AngRemoteModule': './src/app/app.module.ts',
      },
    }),
  ],
};
