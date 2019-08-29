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
import { GlobalSnackbarModule } from 'global-snackbar';

/** Import statemanagement */
import { StoreModule } from '@ngrx/store';
import { reducer } from './components/users/store/user.reducer';
import { CustomIconDirective } from './core/directives/custom-icon.directive';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    GlobalModalModule,
    GlobalSnackbarModule,
    AppRoutingModule,
    MatFormFieldModule,
    SharedModule,
    StoreModule.forRoot({
      userStore: reducer
    })
  ],
  declarations: [
    AppComponent,
    CustomIconDirective,
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
