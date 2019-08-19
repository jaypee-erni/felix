import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersIndexComponent } from './users-index/users-index.component';
import { OutletComponent } from 'src/app/shared/component/outlet/outlet.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

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
          redirectTo: 'login',
          pathMatch: 'full'
        },
        {
          path: 'index',
          component: UsersIndexComponent,
          data: { roles: [] },
          //canActivate: [AuthenticationGuard, RoleGuard]
        },
        {
            path: 'detail/:id',
            component: UsersDetailComponent,
            children: [
              { path: 'edit', component: UsersDetailComponent }
            ],
          },
        /*{
          path: ':user',
          component: UsersDetailComponent,
          data: { roles: [RoleGuardEnum.ADMIN, RoleGuardEnum.RSR] },
          canActivate: [AuthenticationGuard, RoleGuard],
          children: [
            { path: 'edit', component: UsersDetailComponent }
          ],
          runGuardsAndResolvers: 'always',
        },*/
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
  