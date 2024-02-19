import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {PortfolioComponent} from "./detail/portfolio.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {PortfolioListComponent} from "./list/portfolio-list.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioListComponent,
    ],
    providers: [],
    imports: [
        PortfolioRoutingModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class PortfolioModule{}
