import { Component, Inject, OnInit } from '@angular/core';
import { MfeMessageService } from 'shared-mfe-message';
import { APP_NAME } from '../app-name.token';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'HOST ( Shell ) App - Main Component';
  user: any;
  messageArray: String[] = [];
  message: string ='';

  constructor(@Inject(APP_NAME) private app: string, private shared: MfeMessageService) { 
    this.shared.login(app,'test');
  }

  ngOnInit(): void {
    this.shared.c2h$.subscribe((message) => {
      if(message)this.messageArray.push(message)
    })
    
    this.user = this.shared.user;
  }

  passMessage(){
    this.shared.sendToClient(this.message);
  }



}
