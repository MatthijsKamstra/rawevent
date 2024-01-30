import { Routes } from "@angular/router";
import { UserPageComponent } from "../pages/user-page/user-page.component";
import { WipPageComponent } from "../pages/wip-page/wip-page.component";

export const UserRoutes: Routes = [
	{ path: "user", redirectTo: 'home', pathMatch: 'full' }, // redirect to ...
	{ path: "user/qr/:id", title: "User-id", component: UserPageComponent },
	{ path: "user/qr", redirectTo: 'home', pathMatch: 'full' }, // redirect to ...
	{ path: "user/dashboard", title: "User Dasthboard", component: WipPageComponent },
];

