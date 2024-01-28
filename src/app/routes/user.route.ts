
import { Routes } from "@angular/router";
import { UserPageComponent } from "../pages/user-page/user-page.component";

export const UserRoutes: Routes = [
	{ path: "user", redirectTo: 'home', pathMatch: 'full' }, // redirect to ...
	{ path: "user/:id", title: "User-id", component: UserPageComponent },
];

