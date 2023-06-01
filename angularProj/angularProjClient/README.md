# AngularProjRemote

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11. This is Client App ( Module Federation )

## Development server

## Webpack
Run `ng run:all` for a webpack server. Navigate to `http://localhost:4202/`. The application will automatically reload if you change any of the source files.


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Steps to create MFE project using module federation for Angular

1. Create new project  | ng new <projectName>

2. Depending on Angular Version, choose the correct version for module-federation - https://www.npmjs.com/package/@angular-architects/module-federation?activeTab=readme
	Add @angular-architects/module-federation to proejct.( make sure its compatible version or project will not start)
	for Angular 13 use Version ^14.2.3
3. ng add @angular-architects/module-federation@14.2.3
    this will install and the execute the above package. 

4. Choose default package name, and enter port number

5. Module Federation will create and update following files. 
    Update - package.json, angular.json, main.ts
    Create - webpack.config.js, webpack.prod.config.js, bootstrap.js

6. in Webpack config depending of app type ( Host, Client), 
    uncomment section in plugin under ModuleFederationPlugin

    ## (HOST) 
    uncomment the host section and add/update the key value pair for exposed module
    key - name to associate the returned module by in Host
    value - URL to access the remote project.
    E.G
        remotes: {
            "mfe1": "http://localhost:3000/remoteEntry.js",
        }
    
    ## (CLIENT)
    uncomment the remote section and update informaiton. 
    name - usually set to current project name.
    filname - used to look up exposed module/component from host. 
    exposes - 
        key - name to Identify the module
        value - local path to the exposed module/component
    E.G
        name: "angularProjRemote",
        filename: "remoteEntry.js",
        exposes: {
            './mfe': './/src/app/mfe/mfe.module.ts',
            './content': './/src/app/mfe/content/content.component.ts',
        },        
        

7. Running the Project.
    ## (HOST)
    Default way to serve the project is fine. 

    ## (Client)
    ng run:all - this uses the dev server in module deferation to build the files and then serve them

    ng serve - this is also good to use 

8. Consuming the exposed module ( angular )
    this project loads the remote module directly in the app-routing using loadChildren and then executing the loadRemoteModule from modular-federation. 
    see code for full work up. 

9. Consuming the exposed module ( React )
    since react cant run diretly in angular project ( havent found a way YET ), best way is to use a wrapper component then create and render the app using react and react-dom. 
    See code. 

10. Have fun. More updates to follow