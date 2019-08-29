import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BasicTableComponent } from './basic-table.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { MockRouterStub } from '../../models/unit-test-class/service';

export const dataSource: any = {
  id: 1, title: 'testTitle', author: 'test author'
};

describe('BasicTableComponent', () => {
  let component: BasicTableComponent;
  let fixture: ComponentFixture<BasicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ BasicTableComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: Router, useClass: MockRouterStub, },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTableComponent);
    component = fixture.componentInstance;
    component.dataSource = [dataSource];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
