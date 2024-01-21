
import { Routes } from "@angular/router";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { DashboardPageComponent } from "../pages/dashboard-page/dashboard-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { UsersPageComponent } from "../pages/users-page/users-page.component";

export const defaultRoutes: Routes = [
	{ path: "", pathMatch: "full", component: HomePageComponent },
	// { path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	{ path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "users", title: "Users", component: UsersPageComponent },
];

