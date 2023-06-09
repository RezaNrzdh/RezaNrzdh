import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {MainLayoutComponent} from "./shared/layout/main-layout/main-layout.component";

const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            { path: "", loadChildren: () => import("./feature/home/home.module").then(m => m.HomeModule) },
            { path: "portfolio", loadChildren: () => import("./feature/portfolio/portfolio.module").then(m => m.PortfolioModule) },
            { path: "blog", loadChildren: () => import("./feature/blog/blog.module").then(m => m.BlogModule) },
            { path: "order", loadChildren: () => import("./feature/order/order.module").then(m => m.OrderModule) },
            { path: "about", loadChildren: () => import("./feature/about/about.module").then(m => m.AboutModule) },
            { path: "contact", loadChildren: () => import("./feature/contact/contact.module").then(m => m.ContactModule) },
        ]
    },
    { path: "login", loadChildren: () => import("./feature/auth/login/login.module").then(m => m.LoginModule) },
    { path: "register", loadChildren: () => import("./feature/auth/register/register.module").then(m => m.RegisterModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
    exports: [RouterModule]
})
export class RoutingModule {}
