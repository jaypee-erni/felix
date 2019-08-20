import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSnackbarComponent } from './global-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [GlobalSnackbarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [GlobalSnackbarComponent],
  entryComponents: [GlobalSnackbarComponent],
})
export class GlobalSnackbarModule { }
