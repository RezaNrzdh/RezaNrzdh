import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {MainLayoutComponent} from "./shared/layout/main-layout/main-layout.component";
import {CheckTokenService} from "./core/resolver/checkToken.service";
import {CheckBreakpointService} from "./core/resolver/checkBreakpoint.service";
import {AdminLayoutComponent} from "./shared/layout/admin-layout/admin-layout.component";
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        resolve: { a: CheckTokenService, b: CheckBreakpointService },
        children: [
            { path: "", loadComponent: () => import("./feature/home/home.component").then(c => c.HomeComponent) },
            { path: "portfolio", loadComponent: () => import("./feature/portfolio/list/portfolio-list.component").then(c => c.PortfolioListComponent) },
            { path: "portfolio/:slug", loadComponent: () => import("./feature/portfolio/detail/portfolio.component").then(c => c.PortfolioComponent)},
            { path: "blog", loadComponent: () => import("./feature/blog/list/blog-list.component").then(c => c.BlogListComponent) },
            { path: "blog/:slug", loadComponent: () => import("./feature/blog/detail/blog.component").then(c => c.BlogComponent) },
            { path: "order", loadComponent: () => import("./feature/order/order.component").then(c => c.OrderComponent) },
            { path: "about", loadComponent: () => import("./feature/about/about.component").then(c => c.AboutComponent) },
            { path: "contact", loadComponent: () => import("./feature/contact/contact.component").then(c => c.ContactComponent) },
        ]
    },
    { path: "login", loadComponent: () => import("./feature/auth/login/login.component").then(c => c.LoginComponent) },
    { path: "register", loadComponent: () => import("./feature/auth/register/register.component").then(c => c.RegisterComponent) },
    {
        path: "admin",
        canActivate: [AuthGuard],
        component: AdminLayoutComponent,
        children: [
            { path: "", loadComponent: () => import("./admin/dashboard/dashboard.component").then(c => c.DashboardComponent) },
            { path: "portfolio", loadComponent: () => import("./admin/portfolio/list/portfolio-list.component").then(c => c.PortfolioListComponent) },
            { path: "portfolio/:slug", loadComponent: () => import("./admin/portfolio/detail/portfolio.component").then(c => c.PortfolioComponent) },
            { path: "portfolio/new", loadComponent: () => import("./admin/portfolio/detail/portfolio.component").then(c => c.PortfolioComponent) },
            { path: "user", loadComponent: () => import("./admin/user/list/user-list.component").then(c=> c.UserListComponent) },
            { path: "user/:username", loadComponent: () => import("./admin/user/detail/user.component").then(c=> c.UserComponent) },
            { path: "images", loadComponent: () => import("./admin/images/images.component").then(c => c.ImagesComponent) },
            { path: "contact", loadComponent: () => import("./admin/contact/list/contact-list.component").then(c => c.ContactListComponent) },
            { path: "contact/:slug", loadComponent: () => import("./admin/contact/detail/contact.component").then(c => c.ContactComponent) },
            { path: "blog", loadComponent: () => import("./admin/blog/list/blog-list.component").then(c => c.BlogListComponent) },
            { path: "blog/:slug", loadComponent: () => import("./admin/blog/detail/blog.component").then(c => c.BlogComponent) },
            { path: "orders", loadComponent: () => import("./admin/order/order.component").then(c => c.OrderComponent) },
            { path: "comment", loadComponent: () => import("./admin/comment/list/comment-list.component").then(c => c.CommentListComponent) },
            { path: "comment/:slug", loadComponent: () => import("./admin/comment/detail/comment.component").then(c => c.CommentComponent) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
    exports: [RouterModule]
})
export class RoutingModule {}
