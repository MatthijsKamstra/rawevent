import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import * as QRCode from "qrcode-svg";
import { EnvironmentService } from 'src/app/services/environment.service';
import { SecurityService } from 'src/app/services/security.service';
import { UserService } from 'src/app/services/user.service';
import { Constants } from 'src/app/shared/constants/constants';
import { Redirects } from 'src/app/shared/constants/redirects';
import { ICredentials } from 'src/app/shared/interfaces/i-credentials';
import { IFakeDatabase } from 'src/app/shared/interfaces/i-fakedatabase';
import { IUser } from 'src/app/shared/interfaces/i-user';

@Component({
  selector: 'app-uitleg-page',
  templateUrl: './uitleg-page.component.html',
  styleUrls: ['./uitleg-page.component.scss']
})
export class UitlegPageComponent implements OnInit {

  title: string = 'Uitleg';

  _IFakeDatabase!: IFakeDatabase;
  users!: IUser[];

  constructor(
    private environmentService: EnvironmentService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private securityService: SecurityService,
    private userService: UserService,
  ) { }

  ngOnInit() {

    /**
     * this is only to make sure we can test this app,
     * otherwise it would not be secure to download all the users
     */
    this.userService.getUsersHack().subscribe({
      next: (value) => {
        this._IFakeDatabase = value;
        // only 10 users
        this.users = Object.values(value).slice(0, 10);
      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.info('complete');
      },
    });
  }

  // ____________________________________ user related ____________________________________

  convert2Sha256(username: string, password: string = '1234'): string {
    return sha256(username + password);
  }

  convertQR(user: IUser): SafeHtml {
    var url = `${Constants.URL}/user/qr/${user._id}`;
    var svg = new QRCode(url).svg();
    // return svg;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  toUserUrl(user: IUser) {
    // var url = `${Constants.URL}/user/qr/${user._id}`;
    var url = `/user/qr/${user._id}`;
    return url;
  }

  login(user: IUser) {
    const credentials: ICredentials = {
      username: user.userName,
      password: '1234'
    }
    this.securityService.login(credentials).subscribe({
      next: (user: IUser) => {
        // console.log(user);
        if (!user) {
          // not correct login, so redirect to somewhere
          this.router.navigate([Redirects.REDIRECT_AFTER_LOGIN_FALSE]);
        } else {
          console.log(user);
          this.router.navigate([Redirects.DASHBOARD]);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

}
