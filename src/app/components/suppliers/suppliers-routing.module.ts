import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletComponent } from 'src/app/shared/component/outlet/outlet.component';
import { SuppliersIndexComponent } from './suppliers-index/suppliers-index.component';
import { RoleGuard } from 'src/app/shared/guards/role.guard';

const routes: Routes = [
    {
      path: '',
      component: OutletComponent,
      children: [
        {
          path: 'index',
          component: SuppliersIndexComponent,
          data: { roles: ['menu.supplier-index'] }, // roles that will be allowed to access
          canActivate: [RoleGuard]
        },
        {
        },
      ]
    },
    {
      path: '**',
      redirectTo: '/users/index',
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SuppliersRoutingModule {}