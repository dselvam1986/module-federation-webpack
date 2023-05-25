import { Component, Inject, OnInit } from '@angular/core';
import { MfeMessageService } from 'shared-mfe-message';
import { APP_NAME } from '../app-name.token';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

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

  count$: Observable<number> = this.store.pipe(select('count'));

  constructor(
    @Inject(APP_NAME) private app: string, 
    private shared: MfeMessageService,
    private store: Store<CounterState>
  ) { 
    this.shared.login(app,'test');

  }

  ngOnInit(): void {
    console.log(this.count$);
    
    this.shared.c2h$.subscribe((message) => {
      if(message)this.messageArray.push(message)
    })
    
    this.user = this.shared.user;
  }

  passMessage(){
    this.shared.sendToClient(this.message);
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



}
