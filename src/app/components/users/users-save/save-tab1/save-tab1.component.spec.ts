import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTab1Component } from './save-tab1.component';

describe('SaveTab1Component', () => {
  let component: SaveTab1Component;
  let fixture: ComponentFixture<SaveTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
