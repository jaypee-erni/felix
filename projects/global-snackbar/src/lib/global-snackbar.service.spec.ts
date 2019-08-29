import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material';
import { GlobalSnackbarService } from './global-snackbar.service';
import { Overlay } from '@angular/cdk/overlay';

describe('GlobalSnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MatSnackBar,
      Overlay
    ],
  }));

  it('should be created', () => {
    const service: GlobalSnackbarService = TestBed.get(GlobalSnackbarService);
    expect(service).toBeTruthy();
  });
});
