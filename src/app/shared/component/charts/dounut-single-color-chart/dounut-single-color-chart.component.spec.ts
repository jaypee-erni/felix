import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DounutSingleColorChartComponent } from './dounut-single-color-chart.component';

describe('DounutSingleColorChartComponent', () => {
  let component: DounutSingleColorChartComponent;
  let fixture: ComponentFixture<DounutSingleColorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DounutSingleColorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DounutSingleColorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
