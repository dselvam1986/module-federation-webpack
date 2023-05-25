import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, OnDestroy } from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { loadRemoteModule } from '@angular-architects/module-federation';


const containerElementName = 'customReactComponentContainer';

@Component({
  selector: 'app-react',
  template: ` <h2>ReactApp (React Microfrontend)</h2>
    <div style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px">
      This component is being remotely loaded into the application from React App using
      Webpack Module Federation. Angular Component Wrapper is used to render the App.
    </div>
    <span #${containerElementName}></span>`,
  // encapsulation: ViewEncapsulation.None,
})
export class ReactAppComponent implements AfterViewInit, OnDestroy{
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
  root!: any;

  remoteApp!: any;
  remoteModule!: any;

  ngAfterViewInit() {
  
    this.root = createRoot(this.containerRef.nativeElement);
    try {
      this.loadRemoteEntry().then((val) => {
        console.log(val);
        console.log(val.UserButton);
        let node = React.createElement(val.UserButton); 
        console.log(node);
        
        this.root.render(node)
      });
      
    } catch (error) {
      console.log('Erorr', error);
    }
  }

  // async loadRemoteEntry() {
  //   //  const remoteUrl = 'http://localhost:4203/remoteEntry.js';
  //    const remoteUrl = 'http://localhost:4204/remoteEntry.js';
  //   const module = await loadRemoteModule({
  //     remoteEntry: remoteUrl,
  //     remoteName: 'remote_notification',
  //     exposedModule: './Notify',
  //   });
  //   return module;
  // }
  async loadRemoteEntry() {
    const remoteUrl = 'http://localhost:4203/remoteEntry.js';
    const module = await loadRemoteModule({
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'remote_app',
      exposedModule: './UserButton',
    });
    return module;
  }
  
  ngOnDestroy() {
  }
}
