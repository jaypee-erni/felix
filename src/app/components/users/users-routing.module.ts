import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletComponent } from 'src/app/shared/component/outlet/outlet.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersSaveComponent } from './users-save/users-save.component';
import { UsersPaymentComponent } from './users-payment/users-payment.component';
import { UsersIncreaseComponent } from './users-increase/users-increase.component';

const routes: Routes = [
    {
      path: 'login',
      //component: UsersLoginComponent,
    },
    {
      path: 'end',
      //component: UsersEndSessionComponent,
    },
    {
      path: '',
      component: OutletComponent,
      children: [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          component: UsersIndexComponent,
          data: { roles: [] },
          //canActivate: [AuthenticationGuard, RoleGuard]
        },
        {
          path: 'save',
          component: UsersSaveComponent,
          data: { roles: [] },
        },
        {
          path: 'payment',
          component: UsersPaymentComponent,
          data: { roles: [] },
        },
        {
          path: 'increase',
          component: UsersIncreaseComponent,
          data: { roles: [] },
        },

      ]
    },
    {
      path: '**',
      redirectTo: '/users/login',
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsersRoutingModule { }
  