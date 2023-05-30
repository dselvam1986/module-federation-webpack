import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, OnDestroy, ViewContainerRef, HostListener } from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MfeMessageService } from 'shared-mfe-message';
import { Store, select } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { SharedService } from '../shared/shared.service';

const containerElementName = 'customReactComponentContainer';

@Component({
  selector: 'app-notify',
  template: ` <h2>Notify App (React Microfrontend)</h2>
    <div style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px">
      This component is being remotely loaded into the application from React App using
      Webpack Module Federation. Angular Component Wrapper is used to render the App.
    </div>
    <span> {{countValue}}</span>
    <span #${containerElementName}></span>`,
  // encapsulation: ViewEncapsulation.None,
})
export class ReactNotifyComponent implements OnInit ,AfterViewInit, OnDestroy{
  @ViewChild(containerElementName, {static: true}) 
  containerRef!: ElementRef;
  
  copyOfStore = this.store.pipe(select('count'));
  countValue:any;

  

  constructor(
    private mfeShared: MfeMessageService, 
    private store: Store<CounterState>, 
    private shared: SharedService
  ){}

  root!: any;

  remoteUrl = 'http://localhost:4204/remoteEntry.js';
  messagestr:any = 'hello'
  async ngOnInit() {


    this.mfeShared.h2c$.subscribe((message) => {
      if(message) this.messagestr = message
    })

    // behaviour subject to pass data to React client
    this.copyOfStore.subscribe((v:any) => {
      //to react
      this.shared.counterSubject.next(v.count)
    })
  }

  ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);

    try {
      this.loadRemoteEntry().then((val) => {
        console.log(val)
        let node = React.createElement(val.Notify, {
          message: this.mfeShared.user, 
          counterObservable: this.shared.counter$, 
          messageSubject: this.shared.messageSubject
        });

        this.root.render(node)
      });
      
    } catch (error) {
      console.log('Erorr', error);
    }
  }

  async loadRemoteEntry() {
    const remoteUrl = 'http://localhost:4204/remoteEntry.js';
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
