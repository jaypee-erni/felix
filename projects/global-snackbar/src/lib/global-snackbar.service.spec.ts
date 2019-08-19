import { TestBed } from '@angular/core/testing';

import { GlobalSnackbarService } from './global-snackbar.service';

describe('GlobalSnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalSnackbarService = TestBed.get(GlobalSnackbarService);
    expect(service).toBeTruthy();
  });
});
