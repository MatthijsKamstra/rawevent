import { Component, OnInit } from '@angular/core';

import { Routes } from "@angular/router";
import { defaultRoutes } from "../../routes/default.route";
import { testRoutes } from "../../routes/test.route";

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

  isHiddenIsProduction: boolean = environment.production;
  isAuthenticated: boolean = this.securityService.isAuthenticated();

  defaultRoutes: Routes = defaultRoutes;
  testRoutes: Routes = testRoutes;
  pagesRoutes: Routes = pagesRoutes;
  userRoutes: Routes = UserRoutes;

  protected readonly environment = environment;

  constructor(
    private securityService: SecurityService,
  ) { }

  ngOnInit(): void {
    // this.isAdmin = this.securityService.isAdmin();

  }
}
