import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { UserListModel } from '../../models/users/user-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  account: UserListModel;
  initials: string;
  constructor(
    private readonly users: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getCurrentAccount();
  }

  async getCurrentAccount() {
    //this.account = await this.users.getAccount();
    //this.initials = this.account.firstname.slice(0, 1) + this.account.lastname.slice(0, 1);
  }

  goToSettings() {
    this.router.navigateByUrl('/settings/index');
  }

}
