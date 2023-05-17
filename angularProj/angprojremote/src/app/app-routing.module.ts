import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
		path: '',component: ContentComponent
	},
  {
		path: 'mfe',
		loadChildren: () => import('./mfe/mfe.module').then(m => m.MfeModule),
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
