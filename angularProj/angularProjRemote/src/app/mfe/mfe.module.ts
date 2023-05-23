import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { SharedModule } from 'hostShared/SharedModule';

const routes: Routes = [
  {path: '', component: ContentComponent}
];

// async function loadServices(){

//   await loadRemoteModule({
//     type: 'module',
//     remoteEntry: 'http://localhost:4200/remoteEntry.js',
//     exposedModule: './SharedModule'
//   }).then(s => {return s.SharedModule})

// }

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [HeaderComponent, ContentComponent],
  providers: []

  
})
export class MfeModule { }
