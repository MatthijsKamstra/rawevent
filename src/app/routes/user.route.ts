import { Routes } from "@angular/router";
import { DashboardPageComponent } from "../pages/dashboard-page/dashboard-page.component";
import { UserPageComponent } from "../pages/user-page/user-page.component";

export const UserRoutes: Routes = [
	{ path: "user", redirectTo: 'home', pathMatch: 'full' }, // redirect to ...
	{ path: "user/qr/:id", title: "User-id", component: UserPageComponent },
	{ path: "user/qr", redirectTo: 'home', pathMatch: 'full' }, // redirect to ...
	{ path: "user/dashboard", title: "User Dasthboard", component: DashboardPageComponent },
	{ path: "dashboard", redirectTo: 'user/dashboard', pathMatch: 'full' }, // redirect to ...
];
