import {NgModule} from "@angular/core";
import {PortfolioService} from "./services/portfolio.service";
import {SkillsService} from "./services/skills.service";
import {EmployersService} from "./services/employers.service";
import {OrdersService} from "./services/orders.service";
import {AboutService} from "./services/about.service";
import {BlogService} from "./services/blog.service";
import {ResponsiveService} from "./services/responsive.service";
import {AboutModel} from "./models/about.model";
import {ContactService} from "./services/contact.service";
import {AuthService} from "./services/auth.service";

@NgModule({
    providers:[
        PortfolioService,
        SkillsService,
        EmployersService,
        OrdersService,
        AboutService,
        BlogService,
        ResponsiveService,
        ContactService,
        AuthService,
        AboutModel
    ],
    imports:[]
})
export class CoreModule {}
