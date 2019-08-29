import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { of } from 'rxjs';
import { GlobalSnackbarComponent } from './global-snackbar.component';

export const mockData = { success: 'this is test' };
export class MockMatDialogStub {
  open() {
    return {
      data : {},
      afterClosed: () => of('confirm')
    };
  }
}

describe('GlobalSnackbarComponent', () => {
  let component: GlobalSnackbarComponent;
  let fixture: ComponentFixture<GlobalSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSnackbarComponent ],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: mockData },
      ],
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
