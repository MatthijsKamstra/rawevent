import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';



import { Api } from '../shared/config/api';
import { Redirects } from '../shared/constants/redirects';
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
  login(credentials: any): Observable<IUser> {
    const url = Api.getUrl().loginApi;
    let observable: Observable<IUser>;

    if (environment.apiEnabled) {
      observable = this.http.post<IUser>(Api.getUrl().loginApi, credentials, {
        withCredentials: true,
      });
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
   * is this user allowed to manage more then one organisation
   * empty array says NOOOO
   *
   * @returns an array of organisations an user can view/etc
   */
  organisationsAllowed(): string[] {
    const user = this.securityCookieService.getUser();
    if (user?.allowedOrganisations != null) {
      return user?.allowedOrganisations;
    } else {
      return [];
    }
  }

  /**
   * Is the current user an adminstrator?
   */
  isAdmin() {
    const user = this.securityCookieService.getUser();
    return !!user?.roles.ROLE_ADMIN;
  }


}

