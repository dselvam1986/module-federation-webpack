import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
];

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HeaderComponent, ContentComponent]
  
})
export class MfeModule { }
