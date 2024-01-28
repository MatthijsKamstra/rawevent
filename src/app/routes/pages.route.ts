
import { Routes } from "@angular/router";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { DashboardPageComponent } from "../pages/dashboard-page/dashboard-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { SpeakersPageComponent } from "../pages/speakers-page/speakers-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";

export const pagesRoutes: Routes = [
	{ path: "home", title: "Page Home", component: HomePageComponent },
	{ path: "about", title: "Page About", component: AboutPageComponent },
	{ path: "dashboard", title: "Page Dashboard", component: DashboardPageComponent },
	{ path: "styleguide", title: "Page Styleguide", component: StyleguideComponent },
	{ path: "users", title: "Page Users", component: SpeakersPageComponent },
];

