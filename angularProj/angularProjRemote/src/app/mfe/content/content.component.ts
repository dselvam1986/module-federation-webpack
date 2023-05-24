import { Component, Inject, OnInit } from '@angular/core';
import { MfeMessageService } from 'shared-mfe-message';
import { APP_NAME } from 'src/app/app-name.token';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title = 'REMOTE ( MFE-client )  - Content Component';
  user: any;
  message: string = '';
  messageArray: String[] = [];
  constructor(private shared: MfeMessageService) {
    // this.shared.login('Dino', 'test')
   }

  ngOnInit(): void {
    this.shared.h2c$.subscribe(val => {
      if(val)this.messageArray.push(val)
    })

    this.user = this.shared.user
  }

  passMessage(){
    console.log('Client App Pass message clicked');
    this.shared.sendToHost(this.message);
  }
}
