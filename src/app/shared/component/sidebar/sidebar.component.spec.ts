import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Observable, throwError } from 'rxjs';
import { SidebarComponent } from './sidebar.component';
import { ApiService } from 'src/app/core/http/api.service';

export class mockApiService {
  get(url): Observable<any> {
    if (url.indexOf('throwerrorUnitTest') > -1) {
      return throwError(500);
    }
    return of(true);
  }
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: ApiService, useClass: mockApiService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
