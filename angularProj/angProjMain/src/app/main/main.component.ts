import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Main Module - Component ';
  messageArray: String[] = [];
  constructor() { 
  }

  ngOnInit(): void {
    // this.shared.getData().subscribe((message) => {
    //   console.log(message);
    //   if(message)this.messageArray.push(message)
    // })
  }





}
