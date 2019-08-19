import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of, Observable, throwError } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';

export class mockApiService {
  get(url): Observable<any> {
    if (url.indexOf('throwerrorUnitTest') > -1) {
      return throwError(500);
    }
    return of(true);
  }
}

describe('Users.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ApiService, useClass: mockApiService },
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
