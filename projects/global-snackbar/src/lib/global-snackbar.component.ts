import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'gs-global-snackbar',
  templateUrl: './global-snackbar.component.html',
  styleUrls: ['./global-snackbar.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GlobalSnackbarComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit() {}

  get_class_name(): string {
    if (this.data.success === true) {
      return 'success';
    }
    return 'error';

  }
}
