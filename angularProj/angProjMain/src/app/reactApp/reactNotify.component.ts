import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MfeMessageService } from 'shared-mfe-message';

const containerElementName = 'customReactComponentContainer';

@Component({
  selector: 'app-notify',
  template: ` <h2>Notify App (React Microfrontend)</h2>
    <div style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px">
      This component is being remotely loaded into the application from React App using
      Webpack Module Federation. Angular Component Wrapper is used to render the App.
    </div>
    <span #${containerElementName}></span>`,
  // encapsulation: ViewEncapsulation.None,
})
export class ReactNotifyComponent implements OnInit ,AfterViewInit, OnDestroy{
  @ViewChild(containerElementName, {static: true}) 
  containerRef!: ElementRef;
  
  constructor(private shared: MfeMessageService){}
  root!: any;

  remoteUrl = 'http://localhost:4204/remoteEntry.js';
  messagestr:any = 'hello'
  async ngOnInit() {

    this.shared.h2c$.subscribe((message) => {
      if(message) this.messagestr = message
    })

    this.root = createRoot(this.containerRef.nativeElement);
    
    const rComponent = await loadRemoteModule({
          remoteEntry: this.remoteUrl,
          remoteName: 'react_notification',
          exposedModule: './Notify',
        }).then(v => {return v.Notify})

        console.log(rComponent);
        let node = React.createElement(rComponent, {message: this.shared.user});
        this.root.render( node )


  }

  ngAfterViewInit() {
  
    // this.root = createRoot(this.containerRef.nativeElement);
    // try {
    //   this.loadRemoteEntry().then((val) => {
    //     console.log(val)
    //     let node = React.createElement(val.Notify); 
    //     this.root.render(node)
    //   });
      
    // } catch (error) {
    //   console.log('Erorr', error);
    // }
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
