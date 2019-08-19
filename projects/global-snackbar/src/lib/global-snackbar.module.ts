import { NgModule } from '@angular/core';
import { GlobalSnackbarComponent } from './global-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [GlobalSnackbarComponent],
  imports: [
    MatSnackBarModule
  ],
  exports: [GlobalSnackbarComponent]
})
export class GlobalSnackbarModule { }
