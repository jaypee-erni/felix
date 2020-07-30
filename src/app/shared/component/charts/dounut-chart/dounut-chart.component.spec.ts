import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DounutChartComponent } from './dounut-chart.component';

describe('DounutChartComponent', () => {
  let component: DounutChartComponent;
  let fixture: ComponentFixture<DounutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DounutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DounutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});