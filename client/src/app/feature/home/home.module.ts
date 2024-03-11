import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home-routing.module";

import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {EmployersComponent} from "./component/employers/employers.component";
import {ExperienceComponent} from "./component/experience/experience.component";
import {PortfolioComponent} from "./component/portfolio/portfolio.component";
import {SlideComponent} from "./component/slide/slide.component";
import {CompanyComponent} from "./component/company/company.component";

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HomeComponent,
        EmployersComponent,
        ExperienceComponent,
        PortfolioComponent,
        SlideComponent,
        CompanyComponent
    ]
})
export class HomeModule{}
