import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseTab4Component } from './increase-tab4.component';

describe('IncreaseTab4Component', () => {
  let component: IncreaseTab4Component;
  let fixture: ComponentFixture<IncreaseTab4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseTab4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseTab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
