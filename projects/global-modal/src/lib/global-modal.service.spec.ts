import { TestBed } from '@angular/core/testing';

import { GlobalModalService } from './global-modal.service';

describe('GlobalModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalModalService = TestBed.get(GlobalModalService);
    expect(service).toBeTruthy();
  });
});
