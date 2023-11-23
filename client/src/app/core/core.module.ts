import {NgModule} from "@angular/core";
import {PortfolioService} from "./services/portfolio.service";
import {SkillsService} from "./services/skills.service";
import {EmployersService} from "./services/employers.service";
import {OrdersService} from "./services/orders.service";

@NgModule({
    providers:[
        PortfolioService,
        SkillsService,
        EmployersService,
        OrdersService
    ],
    imports:[]
})
export class CoreModule {}
