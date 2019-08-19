import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  @Input() public dataSource;
  @Input() public displayedColumns;
  constructor() { }

  ngOnInit() {
  }

}
