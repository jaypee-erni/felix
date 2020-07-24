import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseTab3Component } from './increase-tab3.component';

describe('IncreaseTab3Component', () => {
  let component: IncreaseTab3Component;
  let fixture: ComponentFixture<IncreaseTab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseTab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseTab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
