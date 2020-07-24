import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseTab2Component } from './increase-tab2.component';

describe('IncreaseTab2Component', () => {
  let component: IncreaseTab2Component;
  let fixture: ComponentFixture<IncreaseTab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseTab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
