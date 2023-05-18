import { Component, OnInit } from '@angular/core';
import { SharedService } from 'hostApp/SharedService';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  data: string = 'Message from Client App';
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.shared.sendMessage(this.data);
  }

  
}
