import {NgModule} from "@angular/core";
import {PortfolioService} from "./services/portfolio.service";
import {SkillsService} from "./services/skills.service";
import {EmployersService} from "./services/employers.service";
import {OrdersService} from "./services/orders.service";
import {AboutService} from "./services/about.service";
import {BlogService} from "./services/blog.service";

@NgModule({
    providers:[
        PortfolioService,
        SkillsService,
        EmployersService,
        OrdersService,
        AboutService,
        BlogService
    ],
    imports:[]
})
export class CoreModule {}
