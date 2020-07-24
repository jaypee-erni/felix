import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialFitnessComponent } from './financial-fitness.component';

describe('FinancialFitnessComponent', () => {
  let component: FinancialFitnessComponent;
  let fixture: ComponentFixture<FinancialFitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialFitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
