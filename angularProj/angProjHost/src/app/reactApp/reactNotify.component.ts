import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, OnDestroy, ViewContainerRef, HostListener } from '@angular/core';
import * as React from 'react';
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MfeMessageService } from 'shared-mfe-message';
import { Store, select } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { SharedService } from '../shared/shared.service';
import { counterSlice, sharedStore } from '../shared/shared.store';

const containerElementName = 'customReactComponentContainer';

@Component({
  selector: 'app-notify',
  template: ` <span #${containerElementName}></span>`,
  // encapsulation: ViewEncapsulation.None,
})
export class ReactNotifyComponent implements OnInit ,AfterViewInit, OnDestroy{
  @ViewChild(containerElementName, {static: true}) 
  containerRef!: ElementRef;
  
  copyOfStore = this.store.pipe(select('count')); 

  constructor(
    private mfeShared: MfeMessageService, 
    private store: Store<CounterState>, 
    private shared: SharedService
  ){}

  root!: any;
  messagestr:any = 'hello'
  async ngOnInit() {


    this.mfeShared.h2c$.subscribe((message: string) => {
      if(message) this.messagestr = message
    })

    // behaviour subject to pass data to React client
    this.copyOfStore.subscribe((v:any) => {
      //to react
      this.shared.storeSubject.next(v.count)
    })
  }

  ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);

    try {
      this.loadRemoteEntry().then((val) => {
        console.log(val)
        let node = React.createElement(val.Notify, {
          message: this.mfeShared.user, 
          store$: this.shared.store$,
          counterSubject: this.shared.counterSubject, 
          messageHostSubject: this.shared.messageHostSubject,
          messageClient$: this.shared.messageClient$
        });

        //Provider({store: sharedStore, context: undefined, children: node })
        this.root.render(
          node
        )
      });
      
    } catch (error) {
      console.log('Erorr', error);
    }
  }

  async loadRemoteEntry() {
    const remoteUrl = 'http://localhost:8081/remoteEntry.js';
    const module = await loadRemoteModule({
      remoteEntry: remoteUrl,
      remoteName: 'react_notification',
      exposedModule: './Notify',
    });
    return module;
  }

  

  
  ngOnDestroy() {
  }

}
