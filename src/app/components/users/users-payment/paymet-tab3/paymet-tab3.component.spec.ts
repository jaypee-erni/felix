import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymetTab3Component } from './paymet-tab3.component';

describe('PaymetTab3Component', () => {
  let component: PaymetTab3Component;
  let fixture: ComponentFixture<PaymetTab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymetTab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymetTab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
