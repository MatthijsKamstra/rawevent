import { Routes } from "@angular/router";
import { NotFoundPageComponent } from "../pages/not-found-page/not-found-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { WipPageComponent } from "../pages/wip-page/wip-page.component";

export const testRoutes: Routes = [
	{ path: "styleguide", title: "Test Styleguide", component: StyleguideComponent },
	{ path: "wip", title: "Page wip", component: WipPageComponent },
	{ path: "oeps", title: "Page Oeps", component: NotFoundPageComponent },
];
