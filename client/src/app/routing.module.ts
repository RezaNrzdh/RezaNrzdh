import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: "", loadChildren: () => import("./feature/home/home.module").then(m => m.HomeModule) },
    { path: "portfolio", loadChildren: () => import("./feature/portfolio/portfolio.module").then(m => m.PortfolioModule) },
    { path: "blog", loadChildren: () => import("./feature/blog/blog.module").then(m => m.BlogModule) },
    { path: "order", loadChildren: () => import("./feature/order/order.module").then(m => m.OrderModule) },
    { path: "about", loadChildren: () => import("./feature/about/about.module").then(m => m.AboutModule) },
    { path: "contact", loadChildren: () => import("./feature/contact/contact.module").then(m => m.ContactModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
    exports: [RouterModule]
})
export class RoutingModule {}