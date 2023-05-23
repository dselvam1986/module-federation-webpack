import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { MfeModule } from './mfe/mfe.module';
import { APP_NAME } from './app-name.token';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfeModule
  ],
  providers: [
    { provide: APP_NAME, useValue: 'ClientApp' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
