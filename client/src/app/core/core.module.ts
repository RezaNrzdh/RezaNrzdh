import {NgModule} from "@angular/core";
import {PortfolioService} from "./services/portfolio.service";
import {SkillsService} from "./services/skills.service";
import {EmployersService} from "./services/employers.service";

@NgModule({
    providers:[
        PortfolioService,
        SkillsService,
        EmployersService
    ],
    imports:[]
})
export class CoreModule {}
