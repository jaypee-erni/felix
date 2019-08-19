import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users/users.service';

/**
 * Define the backend default roles
 */
export enum RoleGuardEnum {
  ADMIN = 'admin',
  SUPPLIER = 'supplier',
}

@Injectable({
  providedIn: 'root',
  deps: [UsersService]
})
export class RoleGuard implements CanActivate {
  public constructor(private usersService: UsersService) {}

  public async canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

      const roles = route.data["roles"] as Array<string>;
      const useClaims = this.usersService.claims;
      const ret = roles.filter(value => useClaims.includes(value));
      // making sure that all expected roles passed is inside the claims comming from backend
      if (ret.length === roles.length) {
        return true;
      }

     // if(!roles || !roles.length) return true;

      if (roles.indexOf(RoleGuardEnum.ADMIN) > -1) {
        // if(this.usersService.isAdmin()) return true;
      }

      if (roles.indexOf(RoleGuardEnum.SUPPLIER) > -1) {
        // if(this.usersService.isSupplier()) return true;
      }

      return false;
  }
}
