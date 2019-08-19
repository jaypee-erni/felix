import { CUSTOM_ELEMENTS_SCHEMA, OnInit, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalModalComponent } from './global-modal.component';
import { CommonModule } from '@angular/common';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { PortalModule, ComponentPortal } from '@angular/cdk/portal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'test-modal',
  template: 'testonly',
})
export class TestModalComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}

export class MatDialogRefStub {
  close(param: string) {}
}

describe('GlobalModalComponent', () => {
  let component: GlobalModalComponent;
  let fixture: ComponentFixture<GlobalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ GlobalModalComponent, TestModalComponent ],
      imports: [
        CommonModule,
        BrowserDynamicTestingModule,
        PortalModule,
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ GlobalModalComponent, TestModalComponent ],
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalModalComponent);
    component = fixture.componentInstance;
    component.portal = new ComponentPortal(TestModalComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
