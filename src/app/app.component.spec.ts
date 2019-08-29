import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBarModule } from '@angular/material';
import { ApiService } from './core/http/api.service';
import { of, Observable, throwError } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MockApiService, MockMatDialogStub } from './shared/models/unit-test-class/service';


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
        { provide: ApiService, useClass: MockApiService },
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
