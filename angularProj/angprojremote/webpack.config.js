const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: 'angRemote',
    scriptType: 'text/javascript',
    publicPath: 'http://localhost:5200/',
  },
  optimization: {
    runtimeChunk: false
  },
  devServer: {
    port: 5200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "angprojremote",
        filename: "remoteEntry.js",
        exposes: {
          './mfe': './src/app/mfe/mfe.module.ts',
          './Header': './src/app/header/header.component.ts',
          './Content': './src/app/content/content.component.ts',
          './Footer': './src/app/footer/footer.component.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
