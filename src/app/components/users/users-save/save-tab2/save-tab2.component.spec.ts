import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTab2Component } from './save-tab2.component';

describe('SaveTab2Component', () => {
  let component: SaveTab2Component;
  let fixture: ComponentFixture<SaveTab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
