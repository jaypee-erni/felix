import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
      private apiService: ApiService,
    ) {}

  /**
   * check if user is login or not
   * @return boolean
   */
  isLogin() {
    if (localStorage.getItem('user') === null) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * service for loggin in the user in the system
   * @return boolean
   */
  login(uname: string, pass: string): Observable<Object> {
    return this.apiService.post(`/posts`, {
      Username: uname, Password: pass,
    });
  }

  logError(): Observable<Object> {
    return this.apiService.post(`/postsError`, {
      author: 'test', title: 'test',
    });
  }

  save(id: number = 0, payload: any = {}): Observable<Object> {
    if (id) {
      return this.apiService.put(`/posts/${id}`, payload);
    } else {
      return this.apiService.post(`/posts`, payload);
    }
  }

  get claims(): string[] {
    if (localStorage.getItem('user') !== null) {
      const claims = atob(JSON.parse(localStorage.getItem('user')).claims);
      const parsedClaims = JSON.parse(claims);
      if (parsedClaims) {
        return parsedClaims;
      }
    }
    return [];
  }

  get_claims() {
    return this.claims;
  }

  checkClaim(claim: string) {
    const claims = this.claims;
    return claims.includes(claim);
  }

  /**
   * service to check whether user currently loggin in is admin
   * @return boolean
   */
  isAdmin(): boolean {
    /*if (this.claims.indexOf('admin') > -1) {
      return true;
    }*/
    return false;
  }

  isSupplier(): boolean {
    /*if (this.claims.indexOf('supplier') > -1) {
      return true;
    }*/
    return false;
  }

}