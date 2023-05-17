import { ComponentRef, Injector, NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactAppComponent } from './reactApp/reactApp.component';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent,
    ReactAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
