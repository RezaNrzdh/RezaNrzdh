import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {PortfolioComponent} from "./detail/portfolio.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {PortfolioListComponent} from "./list/portfolio-list.component";
import {SliderComponent} from "./detail/component/slider/slider.component";

@NgModule({
    declarations: [
        PortfolioComponent,
        SliderComponent,
        PortfolioListComponent
    ],
    providers: [],
    imports: [
        PortfolioRoutingModule,
        SharedModule
    ]
})
export class PortfolioModule{}
