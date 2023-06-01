import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ReactAppComponent } from './reactApp/reactApp.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ReactNotifyComponent } from './reactApp/reactNotify.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

const routes: Routes = [
  
  {path: '', component: SkeletonComponent},
  {path: 'r-mfe', component: ReactNotifyComponent},
  {
    path:'a-mfe', 
    loadChildren: ()=> 
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      exposedModule: './mfe'
    }).then((m) => {console.log(m); return m.MfeModule})
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }