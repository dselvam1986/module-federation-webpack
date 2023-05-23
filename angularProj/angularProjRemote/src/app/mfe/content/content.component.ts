import { Component, OnInit } from '@angular/core';
import { ComLibService } from 'com-lib-module-federation-dino/src/public-api';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title = 'AngularProJRemote MFE - Content Component';
  constructor(private shared: ComLibService) {
   }

   /**
    * 
    */
  ngOnInit(): void {
  }

  passMessage(){
    console.log('Client App Pass message clicked');
    // this.shared.login("client Dino", 'text');
  }
}
