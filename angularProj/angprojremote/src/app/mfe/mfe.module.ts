import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from '../content/content.component';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: WrapperComponent}
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  
})
export class MfeModule { }
