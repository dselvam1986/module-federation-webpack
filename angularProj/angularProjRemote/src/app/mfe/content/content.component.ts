import { Component, OnInit } from '@angular/core';
// import { SharedService } from 'hostShared/SharedModule/SharedService';
import { ComLibService } from 'com-lib';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  shared: any;
  title = 'AngularProJRemote MFE - Content Component';
  constructor() {
    // this.shared = new SharedService()
   }

  ngOnInit(): void {
  }

  // passMessage(){
  //   console.log('Client App Pass message clicked');
  //   this.shared.sendMessage();
  // }
}
