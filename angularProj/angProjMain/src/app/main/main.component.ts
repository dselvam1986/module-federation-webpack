import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MfeMessageService } from 'shared-mfe-message';
import { APP_NAME } from '../app-name.token';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';
import { SharedService } from '../shared/shared.service';

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

  count$ = this.store.pipe(select('count'));
  currentCount: any;


  constructor(
    @Inject(APP_NAME) private app: string, 
    private mfeShared: MfeMessageService,
    private store: Store<CounterState>,
    private shared: SharedService
  ) { 
    this.mfeShared.login(app,'test');
  }

  ngOnInit(): void {

    this.count$.subscribe( (v:any) => this.currentCount = v.count);

    this.mfeShared.c2h$.subscribe((message) => {
      if(message)this.messageArray.push(message)
    })
    
    this.user = this.mfeShared.user;

    this.shared.message$.subscribe((num) => {
      let msg = 'React - Ang Subject: ' +  num
      this.messageArray.push(msg)
    })
  }

  passMessage(){
    this.mfeShared.sendToClient(this.message);
  }

  /**
   Ngrx Store functions
   */
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  /**Windows Event  */
  @HostListener('window:reactBtnClick', ['$event'])
  messageFromReact(value:any) {
    let msg = value.detail.message + ': ' + value.detail.numClick
    this.messageArray.push(msg)
    
  }

  //Remove cards
  close(msg:any){
    this.messageArray = this.messageArray.filter(val => val != msg);

  }

}
