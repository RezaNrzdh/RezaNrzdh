import {NgModule} from "@angular/core";
import {PortfolioService} from "./services/portfolio.service";
import {SkillsService} from "./services/skills.service";

@NgModule({
    providers:[
        PortfolioService,
        SkillsService
    ],
    imports:[]
})
export class CoreModule {}
