import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, OnDestroy } from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { loadRemoteModule } from '@angular-architects/module-federation';


const containerElementName = 'customReactComponentContainer';

@Component({
  selector: 'app-react',
  template: ` <h2 style="color: cadetblue">ReactApp (React Microfrontend)</h2>
    <div style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px">
      This component is being remotely loaded into the application from React App using
      Webpack Module Federation
    </div>
    <span #${containerElementName}></span>`,
  // encapsulation: ViewEncapsulation.None,
})
export class ReactAppComponent implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
  root!: any;

  remoteApp!: any;
  remoteModule!: any;

  ngOnInit() {
    // let ele = this.containerRef.nativeElement;
    // this.root = createRoot(this.containerRef.nativeElement);
    // this.remoteModule = await this.loadRemoteEntry();
    // console.log("remote module",this.remoteModule.UserButton);
    // this.remoteApp = this.remoteModule.UserButton
      
    
    // let ele = React.createElement(this.remoteApp, {}, )
    // this.root.render(ele)
  }

  ngAfterViewInit() {
  
    this.root = createRoot(this.containerRef.nativeElement);
    try {
      // import('remote_app/UserButton').then(val => {
      //   this.root.render(
      //       React.createElement(val.App),
      //     );
      // });
      this.loadRemoteEntry().then((val) => {

        console.log(val);
        let node = React.createElement(val.UserButton);
        console.log("node",node)
        this.root.render(node)
        
      });
    } catch (error) {
      console.log('Erorr', error);
    }
  }

  
  async loadRemoteEntry() {
    const remoteUrl = 'http://localhost:3002/remoteEntry.js';
    const module = await loadRemoteModule({
      remoteEntry: 'http://localhost:3002/remoteEntry.js',
      remoteName: 'remote_app',
      exposedModule: './UserButton',
    });
    return module;
  }
  

  ngOnDestroy() {
  }
}
