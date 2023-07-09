import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {PortfolioComponent} from "./detail/portfolio.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {PortfolioListComponent} from "./list/portfolio-list.component";
import {SliderComponent} from "./detail/component/slider/slider.component";
import {SideComponent} from "./detail/component/side/side.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        PortfolioComponent,
        SliderComponent,
        PortfolioListComponent,
        SideComponent
    ],
    providers: [],
    imports: [
        PortfolioRoutingModule,
        SharedModule,
        CommonModule
    ]
})
export class PortfolioModule{}
