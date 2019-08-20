import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BasicTableComponent } from './basic-table.component';
import { MaterialModule } from 'src/app/core/material/material.module';

export const dataSource: any = {
  id: 1, title: 'testTitle', author: 'test author'
};

export class RouterStub {
  navigate(params) {
    // params value will be depending on the route provided in component
  }
}

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
        { provide: Router, useClass: RouterStub, },
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
