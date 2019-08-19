import { MatFormFieldModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/** components to be declared  */
import { AppComponent } from './app.component';
import { HeaderInterceptor } from './core/http/header-interceptor';

/** Project created  */
import { GlobalModalModule } from 'global-modal';

/** Import statemanagement */
import { StoreModule } from '@ngrx/store';
import { reducer } from './components/users/store/user.reducer';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    GlobalModalModule,
    AppRoutingModule,
    MatFormFieldModule,
    SharedModule,
    StoreModule.forRoot({
      userStore: reducer
    })
  ],
  declarations: [
    AppComponent,

  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
