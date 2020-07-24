import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersIncreaseComponent } from './users-increase.component';

describe('UsersIncreaseComponent', () => {
  let component: UsersIncreaseComponent;
  let fixture: ComponentFixture<UsersIncreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersIncreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
