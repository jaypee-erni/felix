import { NgModule } from '@angular/core';
import { GlobalSnackbarComponent } from './global-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [GlobalSnackbarComponent],
  imports: [
    MatSnackBarModule
  ],
  exports: [GlobalSnackbarComponent],
  entryComponents: [GlobalSnackbarComponent],
})
export class GlobalSnackbarModule { }
