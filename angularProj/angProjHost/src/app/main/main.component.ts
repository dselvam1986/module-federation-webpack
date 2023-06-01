import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MfeMessageService } from 'shared-mfe-message';
import { APP_NAME } from '../app-name.token';

import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';
import { SharedService } from '../shared/shared.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'HOST ( Shell ) App - Main Component';
  
  // Host Communication
  user: any;
  messageArray: String[] = [];
  messageToSend: string ='';

  currentPath: any ='';

  //Store
  count$ = this.store.pipe(select('count'));
  currentCount: any;


  constructor(
    @Inject(APP_NAME) private app: string, 
    private mfeShared: MfeMessageService,
    private store: Store<CounterState>,
    private shared: SharedService,
    private router: Router
  ) { 
    this.mfeShared.login(app,'test');
  }

  ngOnInit(): void {

    //router url
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.currentPath = event.url;    
      }
    })

    //update UI Count
    this.count$.subscribe( (v:any) => this.currentCount = v.count);

    //Angular client shared service
    this.mfeShared.c2h$.subscribe((num) => {
      if(num){
        let msg = 'Ang-MFE-Client: ' +  num
        this.messageArray.push(msg) 
      }
    })
    
    //shared service user
    this.user = this.mfeShared.user;


    // REACT MFE 
    // STATE COUNTER
    this.shared.counter$.subscribe((num) => {
      let msg = 'React-MFE (State) - Subject: ' +  num
      this.messageArray.push(msg)     
    })

    this.shared.messageHost$.subscribe((num:any) => {
      if(num){
        let msg = 'React-MFE - Subject: ' +  num;
        this.messageArray.push(msg);
      }
    })
  }

  //ang - ang
  passMessage(){
    this.mfeShared.sendToClient(this.messageToSend);
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
    let msg = value.detail.message + ': ' + value.detail.value
    this.messageArray.push(msg)
    
  }

  //send Event
  sendMessageByEvent(value:string){
    if(value){
      window.dispatchEvent(new CustomEvent('hostMessage', {detail: {message: 'Host-MFE - Event', value: value}}));
    }
  }

  sendMessageBySubject(value:string){
    // let msg = `Host-MFE - Subject: ${value}`;
    this.shared.messageClientSubject.next(value)
  }
  //Remove cards
  close(msg:any){
    this.messageArray = this.messageArray.filter((m, index)=> {return index !== msg});

  }

}
