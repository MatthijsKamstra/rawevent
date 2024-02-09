import { Component, OnInit } from '@angular/core';

import { Routes } from "@angular/router";
import { defaultRoutes } from "../../routes/default.route";
import { testRoutes } from "../../routes/test.route";

import { EnvironmentService } from 'src/app/services/environment.service';
import { SecurityService } from 'src/app/services/security.service';
import { environment } from 'src/environments/environment';
import { pagesRoutes } from "../../routes/pages.route";
import { UserRoutes } from "../../routes/user.route";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHiddenIsProduction: boolean = this.environmentService.isProduction();
  isAuthenticated: boolean = this.securityService.isAuthenticated();

  defaultRoutes: Routes = defaultRoutes;
  testRoutes: Routes = testRoutes;
  pagesRoutes: Routes = pagesRoutes;
  userRoutes: Routes = UserRoutes;

  constructor(
    private environmentService: EnvironmentService,
    private securityService: SecurityService,
  ) { }

  ngOnInit(): void {
    this.isHiddenIsProduction = this.environmentService.isProduction();
    this.isAuthenticated = this.securityService.isAuthenticated();
  }

  onChangeHandler() {
    console.log('HWOOOOOOO');
  }
}
