import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {EmployersComponent} from "./component/employers/employers.component";
import {ExperienceComponent} from "./component/experience/experience.component";
import {PortfolioComponent} from "./component/portfolio/portfolio.component";
import {SlideComponent} from "./component/slide/slide.component";
import {CompanyComponent} from "./component/company/company.component";

@NgModule({
    declarations: [
        HomeComponent,
        EmployersComponent,
        ExperienceComponent,
        PortfolioComponent,
        SlideComponent,
        CompanyComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule{}
