import { Component, Inject, OnInit } from '@angular/core';
import { MfeMessageService } from 'shared-mfe-message';
import { APP_NAME } from 'src/app/app-name.token';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title = 'REMOTE ( Client-MFE-App )  - Content Component';
  user: any;
  message: string = '';
  messageArray: String[] = [];
  constructor(
    private shared: MfeMessageService
  ) {
    // this.shared.login(app, 'test')
   }

  ngOnInit(): void {
    this.shared.h2c$.subscribe(val => {
      let msg = `Host-Shell-App: ${val}`
      if(val)this.messageArray.push(msg)
    })

    this.user = this.shared.user || 'Client-MFE-App'
  }

  passMessage(){
    console.log('Client App Pass message clicked');
    this.shared.sendToHost(this.message);
  }

  //Remove cards
  close(msg:any){
    this.messageArray = this.messageArray.filter(val => val != msg);
  }
}
