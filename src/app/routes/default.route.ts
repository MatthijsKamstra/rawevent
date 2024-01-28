
import { Routes } from "@angular/router";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { SpeakersPageComponent } from "../pages/speakers-page/speakers-page.component";

export const defaultRoutes: Routes = [
	{ path: "", pathMatch: "full", component: HomePageComponent },
	// { path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	// { path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
	// { path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "speakers", title: "Speakers", component: SpeakersPageComponent },
];

