import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymetTab1Component } from './paymet-tab1.component';

describe('PaymetTab1Component', () => {
  let component: PaymetTab1Component;
  let fixture: ComponentFixture<PaymetTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymetTab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymetTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
