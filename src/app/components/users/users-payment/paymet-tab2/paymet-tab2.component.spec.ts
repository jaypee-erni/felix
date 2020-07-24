import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymetTab2Component } from './paymet-tab2.component';

describe('PaymetTab2Component', () => {
  let component: PaymetTab2Component;
  let fixture: ComponentFixture<PaymetTab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymetTab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymetTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
