import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of, Observable, throwError } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { MockApiService } from '../../models/unit-test-class/service';

describe('Users.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ApiService, useClass: MockApiService },
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
