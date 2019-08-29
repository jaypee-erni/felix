import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Observable, throwError } from 'rxjs';
import { SidebarComponent } from './sidebar.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MockApiService } from '../../models/unit-test-class/service';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: ApiService, useClass: MockApiService },
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
