import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationModalComponent } from './shared/modals/confirmation-modal/confirmation-modal.component';
import { ApiService } from './core/http/api.service';
import { UsersService } from './shared/services/users/users.service';
import { Observable } from 'rxjs';
import { StateUserListModel } from './shared/models/state-management/users/user-list.model';
import { GlobalModalComponent } from 'global-modal';
import { SnackbarComponent } from './shared/component/snackbar/snackbar.component';
import { Store } from '@ngrx/store';
import * as userAction from './components/users/store/user.action';
//import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8.x';
  public user: string;
  public userStore: Observable<StateUserListModel[]>;
  constructor(
    private apiService: ApiService,
    private userService: UsersService,
    private dialog: MatDialog,
    private store: Store<any>,
    private snackBar: MatSnackBar,
    ) {
    this.refresh_joke();
  }

  public modal_dialog() {
    this.dialog.open(GlobalModalComponent, {
      width: '40rem',
      height: '30rem',
      data: {
        component: ConfirmationModalComponent,
        title: 'Title passed from parent',
        buttons: true,
      }
    }).afterClosed().subscribe(data => {
      console.log(`success call!: ${data}`);
    });
  }

  public refresh_joke(): void {
    const rand = Math.floor((Math.random() * 3) + 1);
    this.apiService.get(`posts/${rand}`).subscribe( (ret) =>{
      this.user = ret['name'];
    });
  }

  public changeuser(type: string = 'encoder'): void {
    let uclaim = 'WyJtZW51LnVzZXItZGV0YWlsIiwibWVudS51c2VyLWluZGV4Il0=';
    if (type === 'supplier'){
      uclaim = 'WyJtZW51LnVzZXItZGV0YWlsIiwgIm1lbnUudXNlci1pbmRleCIsICJtZW51LnN1cHBsaWVyLWRldGFpbCIsICJtZW51LnN1cHBsaWVyLWluZGV4Il0=';
    }
    const user = {
      accessToken: 'd51fa7705f8ea3f30dd66a0b1300ebc288ecd906f2d1a6c588a2a0505d17abdb',
      claims: uclaim,
      requiredActions: [
        'ForceChangePassword',
        'UserPermanentlyLocked',
      ],
    };
    localStorage.setItem('user', JSON.stringify(user));
    location.reload();
  }
  show_state() {
    this.store.select('userStore').subscribe(ret => {
      this.userStore = ret;
      console.log('from store: ', this.userStore);
    });
  }
  add_state() {
    /*const newUSer: StateUserListModel = {
      id: faker.random.number(),
      name: faker.random.word(),
      username: faker.random.word(),
      email: `${faker.random.word}@test.com`,
    };*/
    const newUSer: StateUserListModel = {
      id: 1,
      name: 'jaypee',
      username: 'gipipoy',
      email: 'test@test.com',
    };
    this.store.dispatch(new userAction.AddUser(newUSer));
  }

  new_user(): void {
    this.userService.save(0, {title: 'this is new title', author: 'adam smith'}).subscribe(ret => {
      console.log(ret);
    });
  }

  show_snackbar(): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2 * 1000,
    });
  }
}
