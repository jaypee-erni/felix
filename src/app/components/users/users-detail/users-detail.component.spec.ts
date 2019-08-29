import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of, Observable, throwError } from 'rxjs';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { UsersDetailComponent } from './users-detail.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MockApiService, MockActiveRoute, MockRouterStub } from 'src/app/shared/models/unit-test-class/service';

describe('UsersDetailComponent', () => {
  let component: UsersDetailComponent;
  let fixture: ComponentFixture<UsersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ UsersDetailComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      providers: [
        FormBuilder,
        { provide: ApiService, useClass: MockApiService },
        { provide: FormGroup, useValue: {} },
        { provide: ActivatedRoute, useClass: MockActiveRoute },
        { provide: Router, useClass: MockRouterStub, },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Called Functions', () => {
    it('should pass when form is declared through ngOnInt', () => {
      component.form.controls['id'].setValue(1);
      component.form.controls['title'].setValue('test');
      component.form.controls['author'].setValue('test');
    });
  });
});
