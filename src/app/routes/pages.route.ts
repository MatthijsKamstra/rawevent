import { Routes } from "@angular/router";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { LogoutPageComponent } from "../pages/logout-page/logout-page.component";
import { SettingsPageComponent } from "../pages/settings-page/settings-page.component";
import { SpeakersPageComponent } from "../pages/speakers-page/speakers-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { UitlegPageComponent } from "../pages/uitleg-page/uitleg-page.component";
import { WipPageComponent } from "../pages/wip-page/wip-page.component";

export const pagesRoutes: Routes = [
	{ path: "settings", title: "Settings", component: SettingsPageComponent },
	{ path: "uitleg", title: "Uitleg", component: UitlegPageComponent },
	{ path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	{ path: "help", title: "Help", component: WipPageComponent },
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "speakers", title: "Speakers", component: SpeakersPageComponent },
	{ path: "login", title: "Login", component: LoginPageComponent },
	{ path: "logout", title: "Logout", component: LogoutPageComponent },
	{ path: "signup", title: "Signup", component: WipPageComponent },
	{ path: "passwordrecover", title: "Password recover", component: WipPageComponent },
];
