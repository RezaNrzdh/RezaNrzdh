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
            { path: "", loadComponent: () => import("./feature/admin/dashboard/dashboard.component").then(c => c.DashboardComponent) },
            { path: "portfolio", loadComponent: () => import("./feature/admin/portfolio/list/portfolio-list.component").then(c => c.PortfolioListComponent) },
            { path: "portfolio/:slug", loadComponent: () => import("./feature/admin/portfolio/detail/portfolio.component").then(c => c.PortfolioComponent) },
            { path: "portfolio/new", loadComponent: () => import("./feature/admin/portfolio/detail/portfolio.component").then(c => c.PortfolioComponent) },
            { path: "user", loadComponent: () => import("./feature/admin/user/list/user-list.component").then(c=> c.UserListComponent) },
            { path: "user/:username", loadComponent: () => import("./feature/admin/user/detail/user.component").then(c=> c.UserComponent) },
            { path: "images", loadComponent: () => import("./feature/admin/images/images.component").then(c => c.ImagesComponent) },
            { path: "contact", loadComponent: () => import("./feature/admin/contact/list/contact-list.component").then(c => c.ContactListComponent) },
            { path: "contact/:slug", loadComponent: () => import("./feature/admin/contact/detail/contact.component").then(c => c.ContactComponent) },
            { path: "blog", loadComponent: () => import("./feature/admin/blog/list/blog-list.component").then(c => c.BlogListComponent) },
            { path: "blog/:slug", loadComponent: () => import("./feature/admin/blog/detail/blog.component").then(c => c.BlogComponent) },
            { path: "orders", loadComponent: () => import("./feature/admin/order/order.component").then(c => c.OrderComponent) },
            { path: "comment", loadComponent: () => import("./feature/admin/comment/list/comment-list.component").then(c => c.CommentListComponent) },
            { path: "comment/:slug", loadComponent: () => import("./feature/admin/comment/detail/comment.component").then(c => c.CommentComponent) },
            { path: "category", loadComponent: () => import("./feature/admin/category/list/list-category.component").then(c => c.ListCategoryComponent) },
            { path: "category/:id", loadComponent: () => import("./feature/admin/category/detail/category.component").then(c => c.CategoryComponent) },
            { path: "employers", loadComponent: () => import("./feature/admin/employer/list/employer-list.component").then(c => c.EmployerListComponent) },
            { path: "skills", loadComponent: () => import("./feature/admin/skill/list/skill-list.component").then(c => c.SkillListComponent) },
            { path: "experience", loadComponent: () => import("./feature/admin/experience/list/experience-list.component").then(c => c.ExperienceListComponent) },
            { path: "language", loadComponent: () => import("./feature/admin/language/list/language.component").then(c => c.LanguageComponent) },
            { path: "about", loadComponent: () => import("./feature/admin/about/about.component").then(c => c.AboutComponent) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
    exports: [RouterModule]
})
export class RoutingModule {}
