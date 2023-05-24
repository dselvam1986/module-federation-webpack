import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ReactAppComponent } from './reactApp/reactApp.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  // {path: '', loadChildren:()=> import('./main/main.module').then(m=> m.MainModule)},
  // {path: '', component: MainComponent},
  {path: '', component: ReactAppComponent},
  {
    path:'mfe', 
    loadChildren: ()=> 
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './mfe'
    }).then((m) => {console.log(m); return m.MfeModule})
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }