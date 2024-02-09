import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../shared/config/api';
import { Redirects } from '../shared/constants/redirects';
import { ICredentials } from '../shared/interfaces/i-credentials';
import { IUser } from '../shared/interfaces/i-user';
import { SecurityCookieService } from './security-cookie.service';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(
    private http: HttpClient,
    private securityCookieService: SecurityCookieService,
    private router: Router,
  ) { }

  /**
   * Attempt to authenticate a user by the given username and password
   *
   * @example
   * ```js
   *      this.securityService.login({'foo', 'bar'}).subscribe(data => {
   *          this.data = data;
   *      });
   * ```
   *
   * @param credentials
   */
  login(credentials: ICredentials): Observable<IUser> {
    const url = Api.getUrl().loginApi;
    let observable: Observable<IUser>;
    if (environment.apiEnabled) {
      // observable = this.http.post<IUser>(url, credentials, {
      //   withCredentials: true,
      // });
      // [FIXME] : this is local data
      observable = this.http.get<IUser>(url);
    } else {
      // needed for locally testing
      observable = this.http.get<IUser>(url);
    }
    return observable.pipe(
      tap((data) => {
        this.securityCookieService.storeUser(data);
      })
    );
  }

  navigateToLogoutPage() {
    this.router.navigate([Redirects.REDIRECT_LOGOUT]);
  }

  logout(): Observable<{}> {
    const url = Api.getUrl().logoutApi;
    let observable: Observable<{}>;
    if (environment.apiEnabled) {
      observable = this.http.post(url, {});
    } else {
      observable = this.http.get(url);
    }
    return observable;
  }

  getUser(): IUser | null {
    return this.securityCookieService.getUser();
  }

  /**
   * Is the current user authenticated?
   * @returns
   */
  isAuthenticated(): boolean {
    return !!this.securityCookieService.getUser();
  }

  clearLocalSession() {
    this.securityCookieService.removeUser();
  }

  currentToken(): string {
    return this.securityCookieService.getCurrentToken();
  }

  currentOrganisation(): string {
    return this.securityCookieService.getCurrentOrganisation();
  }

  /**
   * Is the current user an adminstrator?
   */
  isAdmin() {
    const user = this.securityCookieService.getUser();
    return !!user?.roles?.ROLE_ADMIN;
  }

}

