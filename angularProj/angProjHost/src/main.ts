import { loadRemoteEntry, LoadRemoteEntryOptions, loadRemoteModule } from '@angular-architects/module-federation';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { error } from 'console';


fetch('./assets/manifest.json').then(parseJson).then(loadMFE).then(bootstrap).catch(error => {console.error(error)});


function checkStatus(response:any) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		console.log('Not found json file')
		const error = new Error(response.statusText) as any;
		error.response = response;
		throw error;
	}
}

function parseJson(result:any) {
	return result.json();
}

function loadMFE(config:any){
	let configData = config.mfeConfig;

	return configData.forEach((config:LoadRemoteEntryOptions) => {
		loadRemoteEntry(config).catch((error: any) => {console.log('Load Entry failed', error)});
	});
}

function bootstrap(){
	import('./bootstrap').catch(err => console.error(err));
}
// function bootstrap() {
// 	return platformBrowserDynamic().bootstrapModule(AppModule);
// }

// Promise.all([
//     loadRemoteEntry('http://localhost:4202/remoteEntry.js', 'mfe'),
//     loadRemoteEntry('http://localhost:4203/remoteEntry.js', 'UserButton'),
//     loadRemoteEntry('http://localhost:4204/remoteEntry.js', 'Notify'),
//     loadRemoteEntry('http://localhost:4204/remoteEntry.js', 'App'),
// ])
// .catch(err => console.error('Error loading remote entries', err))
// .then(() => import('./bootstrap'))
// .catch(err => console.error(err));

// import('./bootstrap')
// 	.catch(err => console.error(err));
