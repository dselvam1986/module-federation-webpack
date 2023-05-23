import { ComponentRef, InjectionToken, Injector, NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactAppComponent } from './reactApp/reactApp.component';
import { MainModule } from './main/main.module';
import { APP_NAME } from './app-name.token';


@NgModule({
  declarations: [
    AppComponent,
    ReactAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
  ],
  providers: [
    // { provide: APP_NAME, useValue: 'HostApp' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
