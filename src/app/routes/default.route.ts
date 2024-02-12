import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";

export const defaultRoutes: Routes = [
	{ path: "", pathMatch: "full", component: HomePageComponent },
	{ path: "home", title: "Home", component: HomePageComponent },
];
