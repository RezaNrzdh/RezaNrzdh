import {NgModule} from "@angular/core";

import {PortfolioComponent} from "./detail/portfolio.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {PortfolioListComponent} from "./list/portfolio-list.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    providers: [],
    imports: [
    PortfolioRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    PortfolioComponent,
    PortfolioListComponent
]
})
export class PortfolioModule{}
