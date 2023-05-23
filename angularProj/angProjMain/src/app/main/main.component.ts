import { Component, OnInit } from '@angular/core';
// import { SharedService } from '../shared/shared.service';
import { ComLibService } from 'com-lib';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Main Module - Component ';
  messageArray: String[] = [];
  constructor(private service: ComLibService) { 
    // private shared: SharedService
    // this.messageArray.push('Main Component Started')
    this.service.login('Dino', 'cob');
  }

  ngOnInit(): void {
    // this.shared.getData().subscribe((message) => {
    //   console.log(message);
    //   if(message)this.messageArray.push(message)
    // })
  }





}
