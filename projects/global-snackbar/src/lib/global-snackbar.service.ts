import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalSnackbarComponent } from './global-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalSnackbarService {

  constructor(private readonly snackBar: MatSnackBar) { }

  openSuccess(p: string = 'Success'): void {
    this.snackBar.openFromComponent(GlobalSnackbarComponent, {
      duration: 2 * 1000,
    });
  }

  openError(p: string = 'Error'): void {
    console.log(p);
  }
}
