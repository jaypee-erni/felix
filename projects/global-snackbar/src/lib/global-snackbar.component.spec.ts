import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSnackbarComponent } from './global-snackbar.component';

describe('GlobalSnackbarComponent', () => {
  let component: GlobalSnackbarComponent;
  let fixture: ComponentFixture<GlobalSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
