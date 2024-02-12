import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { sha256 } from 'js-sha256';
import * as QRCode from "qrcode-svg";
import { UserService } from 'src/app/services/user.service';
import { Constants } from 'src/app/shared/constants/constants';
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
    private userService: UserService,
    private sanitizer: DomSanitizer
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

  convert2Sha256(username: string, password: string = '1234'): string {
    return sha256(username + password);
  }

  convertQR(user: IUser): SafeHtml {
    var url = `${Constants.URL}/user/qr/${user._id}`;
    var svg = new QRCode(url).svg();
    // return svg;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

}
