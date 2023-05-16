import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactAppComponent } from './reactApp/reactApp.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactAppComponent
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
export class AppModule { }
