import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from './shared/modals/confirmation-modal/confirmation-modal.component';
import { ApiService } from './core/http/api.service';
import { UsersService } from './shared/services/users/users.service';
import { Observable } from 'rxjs';
import { StateUserListModel } from './shared/models/state-management/users/user-list.model';
import { GlobalModalComponent } from 'global-modal';
import { GlobalSnackbarService } from 'global-snackbar';
import { Store } from '@ngrx/store';
import * as userAction from './components/users/store/user.action';
import * as faker from 'faker';

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
    private readonly apiService: ApiService,
    private readonly userService: UsersService,
    private readonly dialog: MatDialog,
    private readonly store: Store<any>,
    private readonly snackBar2: GlobalSnackbarService,
    ) {
    this.refresh_joke();
  }

  /**
   * responsible for shwing modal by using Global Modal declared in projects
   * @param none void
   * @return void
   */

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

  /**
   * responsible for shwing modal by using Global Modal declared in projects
   * @param type string
   * @return void
   */

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
  /**
   * adds a random user in a storage
   * @param none void
   * @return void
   */
  add_state() {
    const newUSer: StateUserListModel = {
      id: 1,
      name: faker.name.firstName(),
      username: faker.name.lastName(),
      email: `${faker.name.firstName()}@test.com`,
    };
    this.store.dispatch(new userAction.AddUser(newUSer));
  }

  /**
   * adds a random user in a api
   * @param none void
   * @return void
   */
  new_user(): void {
    this.userService.save(0, {title: faker.random.words(), author: `${faker.name.firstName()} ${faker.name.lastName()}`}).subscribe(ret => {
      console.log(ret);
    });
  }

  /**
   * show the snackbar if there is a response in the backend
   * @param none void
   * @return void
   */
  show_snackbar(): void {
    this.snackBar2.openSuccess('Success!.');
  }

  show_snackbarError(): void {
    this.snackBar2.openError('This is error chos!');
  }
}
