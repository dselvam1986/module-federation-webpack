// import { loadRemoteEntry } from '@angular-architects/module-federation';

// Promise.all([
//     loadRemoteEntry('http://localhost:4202/remoteEntry.js', 'mfe'),
//     loadRemoteEntry('http://localhost:4203/remoteEntry.js', 'UserButton'),
//     loadRemoteEntry('http://localhost:4204/remoteEntry.js', 'Notify'),
//     loadRemoteEntry('http://localhost:4204/remoteEntry.js', 'App'),
// ])
// .catch(err => console.error('Error loading remote entries', err))
// .then(() => import('./bootstrap'))
// .catch(err => console.error(err));

import('./bootstrap')
	.catch(err => console.error(err));
