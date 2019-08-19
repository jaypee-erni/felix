import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UsersIndexComponent } from './users-index.component';
import { ApiService } from 'src/app/core/http/api.service';
import { UserListModel } from '../../../shared/models/users/user-list.model';
import { SharedModule } from 'src/app/shared/shared.module';


export class mockApiService {
  get(url): Observable<any> {
    if (url.indexOf('throwerrorUnitTest') > -1) {
      return throwError(500);
    }
    return of([{
      id: 1, title: 'test', author: 'testauthor'
    }]);
  }
}
export const dataSource: UserListModel = {
  id: 1, title: 'testTitle', author: 'test author'
};
export class RouterStub {
  navigate(params) {
    // params value will be depending on the route provided in component
  }
}

describe('UsersIndexComponent', () => {
  let component: UsersIndexComponent;
  let fixture: ComponentFixture<UsersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersIndexComponent ],
      imports: [SharedModule],
      providers: [
        { provide: ApiService, useClass: mockApiService },
        { provide: Router, useClass: RouterStub, },
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
