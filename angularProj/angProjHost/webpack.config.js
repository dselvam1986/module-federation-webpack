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
    uniqueName: "angular-MFE-Host",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "angProjMain",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './SharedModule': './/src/app/shared/shared.module.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },
        name: 'angProjMain',
        // remotes: {
        //     angularMFE: `http://localhost:8082/remoteEntry.js`,
        //     react_notification: `react_notification@http://localhost:8081/remoteEntry.js`,
        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "shared-mfe-message": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "react": { singleton: true, strictVersion: true },
          "react-dom": { singleton: true, strictVersion: true },
          "redux": { singleton: true, strictVersion: true },
          "react-redux": { singleton: true, strictVersion: true },
          ...sharedMappings.getDescriptors()
        }),
    }),
    sharedMappings.getPlugin()
  ],
};
