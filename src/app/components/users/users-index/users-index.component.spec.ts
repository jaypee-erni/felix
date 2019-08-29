import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UsersIndexComponent } from './users-index.component';
import { ApiService } from 'src/app/core/http/api.service';
import { UserListModel } from '../../../shared/models/users/user-list.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { MockApiService, MockRouterStub } from 'src/app/shared/models/unit-test-class/service';

export const dataSource: UserListModel = {
  id: 1, title: 'testTitle', author: 'test author'
};

describe('UsersIndexComponent', () => {
  let component: UsersIndexComponent;
  let fixture: ComponentFixture<UsersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersIndexComponent ],
      imports: [SharedModule],
      providers: [
        { provide: ApiService, useClass: MockApiService },
        { provide: Router, useClass: MockRouterStub, },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersIndexComponent);
    component = fixture.componentInstance;
    component.dataSource = [dataSource];
    component.displayedColumns = ['id', 'title', 'author'];
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
