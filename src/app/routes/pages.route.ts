import { Routes } from "@angular/router";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { DashboardPageComponent } from "../pages/dashboard-page/dashboard-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { LogoutPageComponent } from "../pages/logout-page/logout-page.component";
import { SpeakersPageComponent } from "../pages/speakers-page/speakers-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { WipPageComponent } from "../pages/wip-page/wip-page.component";

export const pagesRoutes: Routes = [
	{ path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	{ path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "speakers", title: "Speakers", component: SpeakersPageComponent },
	{ path: "login", title: "Login", component: LoginPageComponent },
	{ path: "logout", title: "Logout", component: LogoutPageComponent },
	{ path: "signup", title: "Signup", component: WipPageComponent },
];
