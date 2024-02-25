import {NgModule} from "@angular/core";
import {PortfolioComponent} from "./list/portfolio.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {PortfolioNewComponent} from "./detail/portfolio-new.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioNewComponent
    ],
    imports: [
        PortfolioRoutingModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class PortfolioModule {}
