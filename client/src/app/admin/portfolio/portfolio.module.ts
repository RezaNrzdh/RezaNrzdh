import {NgModule} from "@angular/core";
import {PortfolioListComponent} from "./list/portfolio-list.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";

import {CommonModule} from "@angular/common";
import {PortfolioComponent} from "./detail/portfolio.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
    PortfolioRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    PortfolioListComponent,
    PortfolioComponent
]
})
export class PortfolioModule {}
