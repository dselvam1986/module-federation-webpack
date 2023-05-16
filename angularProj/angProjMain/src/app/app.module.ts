import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactAppComponent } from './reactApp/reactApp.component';

//Add remote angular component directly to module.ts
import('angRemote/HeaderComponent').then((module) => {
 const RemoteHeaderComponent = module.default;

 @NgModule({
  declarations: [
    AppComponent,
    ReactAppComponent,
    RemoteHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: loadRemoteEntry,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
class AppModule { }

})

