import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {BlogComponent} from "./component/blog/blog.component";
import {ExperienceComponent} from "./component/experience/experience.component";
import {PortfolioComponent} from "./component/portfolio/portfolio.component";
import {SlideComponent} from "./component/slide/slide.component";

@NgModule({
    declarations: [
        HomeComponent,
        BlogComponent,
        ExperienceComponent,
        PortfolioComponent,
        SlideComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule{}