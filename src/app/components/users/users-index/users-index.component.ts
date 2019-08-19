import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { UserListModel } from '../../../shared/models/users/user-list.model';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.scss']
})
export class UsersIndexComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author'];
  dataSource: UserListModel[];

  constructor(
    private readonly router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.get(`posts`).subscribe( (ret: UserListModel[]) => {
      this.dataSource = ret;
    });
  }

  public gotoDetails(e) {
    this.router.navigate([`/users/detail/${e.id}`]);
  }

}
