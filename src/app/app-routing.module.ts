import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users/home', // '/users/login',
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: 'src/app/components/users/users.module#UsersModule',
    canActivate: [/*AuthenticationGuard*/]
  },
  {
    path: 'suppliers',
    loadChildren: 'src/app/components/suppliers/suppliers.module#SuppliersModule',
    canActivate: [/*AuthenticationGuard*/]
  },
  /*{
    path: 'settings',
    loadChildren: 'src/app/components/settings/settings.module#SettingsModule',
    canActivate: [AuthenticationGuard]
  },*/
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
