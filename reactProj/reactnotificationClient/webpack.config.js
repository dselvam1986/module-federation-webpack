const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: false
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  output: {
    uniqueName: "react-MFE-Client",
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader',
              'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'react_notification',
      library: {type: 'var', name: 'react_notification'},
      filename: 'remoteEntry.js',
      exposes: { 
        './Notify': './src/Notify', 
      },
      shared: {
        'react': {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        }
      },
    }),
  ],
};