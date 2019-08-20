import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalSnackbarComponent } from './global-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalSnackbarService {

  private readonly DURATION = 3;
  constructor(private readonly snackBar: MatSnackBar) { }

  /**
   * code that calls the default snackbar library and outputs success palcement
   * @param p string
   * @return void
   */
  openSuccess(p: string = 'Success'): void {
    this.snackBar.openFromComponent(GlobalSnackbarComponent, {
      duration: this.DURATION * 1000,
      data: {
        message: p,
        success: true,
      },
    });
  }

  /**
   * code that calls the default snackbar library and outputs error palcement
   * @param p string
   * @return void
   */
  openError(p: string = 'Error'): void {
    this.snackBar.openFromComponent(GlobalSnackbarComponent, {
      duration: this.DURATION * 1000,
      data: {
        message: p,
        success: false,
      },
    });
  }
}
