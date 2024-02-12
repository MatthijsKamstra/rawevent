import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

import { defaultRoutes } from "./routes/default.route";
import { navigationRoutes } from "./routes/navigation.route";
import { pagesRoutes } from "./routes/pages.route";
import { testRoutes } from "./routes/test.route";
import { UserRoutes } from "./routes/user.route";

const DEFAULT_ROUTES = [...defaultRoutes];
const PUBLIC_ROUTES = [...navigationRoutes];
const TEST_ROUTES = [...testRoutes];
const PAGES_ROUTES = [...pagesRoutes];
const USER_ROUTES = [...UserRoutes];

const routes: Routes = [
  ...DEFAULT_ROUTES,
  ...PUBLIC_ROUTES,
  ...TEST_ROUTES,
  ...PAGES_ROUTES,
  ...USER_ROUTES,
  { path: "**", title: "oeps", component: NotFoundPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

