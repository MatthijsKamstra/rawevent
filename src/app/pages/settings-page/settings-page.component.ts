import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvironmentService } from 'src/app/services/environment.service';
import { SecurityService } from 'src/app/services/security.service';
import { Redirects } from 'src/app/shared/constants/redirects';
import { ICredentials } from 'src/app/shared/interfaces/i-credentials';
import { IUser } from 'src/app/shared/interfaces/i-user';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  title: string = 'Settings';

  user!: IUser;

  isApiEnabled = this.environmentService.isApiEnabled();
  isProduction = this.environmentService.isProduction();

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private environmentService: EnvironmentService,
  ) { }

  ngOnInit(): void {
    const credentials: ICredentials = {
      username: 'kortney_brouwer',
      password: '1234'
    }
    this.loginUser(credentials);
  }
  /**
   * Attempt to authenticate the user specified in the form's model
   *
   * @param credentials
   */
  loginUser(credentials: ICredentials) {
    this.securityService.login(credentials).subscribe({
      next: (user: IUser) => {
        // console.log(user);
        if (!user) {
          // not correct login, so redirect to somewhere
          this.router.navigate([Redirects.REDIRECT_AFTER_LOGIN_FALSE]);
        } else {
          this.user = user;
          console.log(user);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  };

  currentToken(): string {
    return this.securityService.currentToken();
  }

  onDashboardClick() {
    this.router.navigate([Redirects.DASHBOARD]);
  }
}
