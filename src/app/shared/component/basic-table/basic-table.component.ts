import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  @Input() public dataSource;
  @Input() public displayedColumns;
  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  public gotoDetails(e) {
    this.router.navigate([`/users/detail/${e.id}`]);
  }

}
