import { Component, OnInit } from '@angular/core';
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
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.get(`posts`).subscribe( (ret: UserListModel[]) => {
      this.dataSource = ret;
    });
  }

}
