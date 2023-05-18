import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Main Module - Component ';
  messageArray: String[] = [];
  constructor(private shared: SharedService) { 
    this.messageArray.push('Main Component Started')
  }

  ngOnInit(): void {
    this.shared.getData().subscribe((message) => {
      if(message) this.messageArray.push(message)
    })
  }





}
