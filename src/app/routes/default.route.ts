
import { Routes } from "@angular/router";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { LogoutPageComponent } from "../pages/logout-page/logout-page.component";
import { SpeakersPageComponent } from "../pages/speakers-page/speakers-page.component";
import { WipPageComponent } from "../pages/wip-page/wip-page.component";

export const defaultRoutes: Routes = [
	{ path: "", pathMatch: "full", component: HomePageComponent },
	// { path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	{ path: "speakers", title: "Speakers", component: SpeakersPageComponent },

];

