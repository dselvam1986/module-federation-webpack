import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ReactAppComponent } from './reactApp/reactApp.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'react', component: ReactAppComponent},
  {
    path:'mfe', 
    loadChildren: ()=> 
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'angular_app',
        exposedModule: 'MFE'
      }).then( m => m.MFE)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**  {
    path:'mfe', loadChildren: ()=> import('angular_app/MFE').then(m => m.MfeModule)
  } */