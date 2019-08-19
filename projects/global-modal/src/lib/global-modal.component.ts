import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'gm-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GlobalModalComponent implements OnInit {

  portal: ComponentPortal<any>;

  constructor(
    public dialogRef: MatDialogRef<GlobalModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.portal = new ComponentPortal(this.data.component);
    if (this.data['buttons'] === undefined) {
      this.data['buttons'] = true;
    }
    if (this.data['yes'] === undefined) {
      this.data['yes'] = 'Confirm';
    }
    if (this.data['no'] === undefined) {
      this.data['no'] = 'Cancel';
    }
  }

  ngOnInit() {
  }

  action(type: string) {
    this.dialogRef.close(type);
  }

}
