import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvironmentService } from 'src/app/services/environment.service';
import { SecurityService } from 'src/app/services/security.service';
import { Redirects } from 'src/app/shared/constants/redirects';
import { IUser } from 'src/app/shared/interfaces/i-user';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  title: string = 'Dashboard';

  user: IUser | null = this.securityService.getUser();

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private environmentService: EnvironmentService,
  ) {

  }

  ngOnInit(): void {
    // it would be better to create a "secure" route,
    // but not (yet) for this POC
    if (!this.user) {
      this.router.navigate([Redirects.REDIRECT_HOME]);
    }
    this.title = `Dashboard voor ${this.user?.firstName} ${this.user?.lastName}:`;
  }

}
