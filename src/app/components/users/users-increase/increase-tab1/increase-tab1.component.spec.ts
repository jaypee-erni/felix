import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseTab1Component } from './increase-tab1.component';

describe('IncreaseTab1Component', () => {
  let component: IncreaseTab1Component;
  let fixture: ComponentFixture<IncreaseTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseTab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
