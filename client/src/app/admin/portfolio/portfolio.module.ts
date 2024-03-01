import {NgModule} from "@angular/core";
import {PortfolioListComponent} from "./list/portfolio-list.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {PortfolioComponent} from "./detail/portfolio.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        PortfolioListComponent,
        PortfolioComponent
    ],
    imports: [
        PortfolioRoutingModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class PortfolioModule {}
