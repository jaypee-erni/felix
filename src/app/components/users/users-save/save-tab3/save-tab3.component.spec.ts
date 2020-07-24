import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTab3Component } from './save-tab3.component';

describe('SaveTab3Component', () => {
  let component: SaveTab3Component;
  let fixture: ComponentFixture<SaveTab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
