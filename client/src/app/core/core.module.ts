import {NgModule} from "@angular/core";
import {PortfolioService} from "./services/portfolio.service";
import {SkillsService} from "./services/skills.service";
import {EmployersService} from "./services/employers.service";
import {OrdersService} from "./services/orders.service";
import {AboutService} from "./services/about.service";
import {BlogService} from "./services/blog.service";0
import {AboutModel} from "./models/about.model";
import {ContactService} from "./services/contact.service";
import {AuthService} from "./services/auth.service";

import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from "./interceptor/http.interceptor";
import {ImagesService} from "./services/images.service";
import {AuthGuard} from "./guard/auth.guard";

const HttpInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
}

@NgModule({
    providers:[
        PortfolioService,
        SkillsService,
        EmployersService,
        OrdersService,
        AboutService,
        BlogService,
        ContactService,
        AuthService,
        HttpInterceptor,
        AboutModel,
        ImagesService,
        AuthGuard
    ],
    imports:[]
})
export class CoreModule {}
