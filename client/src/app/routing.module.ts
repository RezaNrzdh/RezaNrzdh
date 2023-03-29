import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: "", loadChildren: () => import("./feature/home/home.module").then(m => m.HomeModule) },
    { path: "portfolio", loadChildren: () => import("./feature/portfolio/portfolio.module").then(m => m.PortfolioModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
    exports: [RouterModule]
})
export class RoutingModule {}