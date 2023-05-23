import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SharedService } from './shared.service';


@NgModule({
  providers: [
    SharedService
  ]

  
})
export class SharedModule { }
