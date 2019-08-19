import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBarModule } from '@angular/material';
import { ApiService } from './core/http/api.service';
import { of, Observable, throwError } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

export class mockApiService {
  get(url): Observable<any> {
    if (url.indexOf('throwerrorUnitTest') > -1) {
      return throwError(500);
    }
    return of(true);
  }
}
export class MockMatDialogStub {
  open() {
    return {
      data : {},
      afterClosed: () => of('confirm')
    };
  }
}
export const matDialogRefStub = {
  close: () => { }
};

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        StoreModule.forRoot({}),
        MatSnackBarModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      providers: [
        Store,
        { provide: ApiService, useClass: mockApiService },
        { provide: MatDialog, useClass: MockMatDialogStub },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
