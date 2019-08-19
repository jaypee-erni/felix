import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [RouterLinkActive]
})
export class SidebarComponent implements OnInit {

  public menu = {
    users: false,
    suppliers: false
  };
  public currentRoute: string;
  constructor(public router: Router, private userService: UsersService) { }

  ngOnInit() {

    const claims = this.userService.claims;
    if (claims.indexOf('menu.user-index') > -1) {
      this.menu.users = true;
    }
    if (claims.indexOf('menu.supplier-index') > -1) {
      this.menu.suppliers = true;
    }

    if (this.router.url) {
      this.currentRoute = this.router.url.split('/').filter(r => r)[0];
    }
  }

}
