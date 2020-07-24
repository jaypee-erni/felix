import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DougnnutFinancialfitnessComponent } from './dougnnut-financialfitness.component';

describe('DougnnutFinancialfitnessComponent', () => {
  let component: DougnnutFinancialfitnessComponent;
  let fixture: ComponentFixture<DougnnutFinancialfitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DougnnutFinancialfitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DougnnutFinancialfitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
