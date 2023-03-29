import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {PortfolioComponent} from "./portfolio.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";

@NgModule({
    declarations: [
        PortfolioComponent
    ],
    providers: [],
    imports: [
        PortfolioRoutingModule,
        SharedModule
    ]
})
export class PortfolioModule{}