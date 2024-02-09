
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { Redirects } from 'src/app/shared/constants/redirects';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss']
})
export class LogoutPageComponent implements OnInit {

  constructor(
    private securityService: SecurityService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  private logout(): void {
    this.securityService.clearLocalSession();

    this.securityService.logout().subscribe(
      response => this.router.navigate([Redirects.REDIRECT_HOME])
    );
  }
}
