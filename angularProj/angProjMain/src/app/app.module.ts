import { ComponentRef, InjectionToken, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactAppComponent } from './reactApp/reactApp.component';
// import { MainModule } from './main/main.module';
import { APP_NAME } from './app-name.token';
import { MfeMessageService } from 'shared-mfe-message';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

//ngrx store
// import { StoreModule } from '@ngrx/store';
// import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReactAppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // StoreModule.forRoot({count: counterReducer})
    // MainModule,
  ],
  providers: [
    { provide: APP_NAME, useValue: 'Host-Dino' },
    MfeMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
