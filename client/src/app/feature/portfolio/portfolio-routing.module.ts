import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PortfolioComponent} from "./detail/portfolio.component";
import {PortfolioListComponent} from "./list/portfolio-list.component";

const routes: Routes = [
    { path: "", component: PortfolioListComponent },
    { path: ":slug", component: PortfolioComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PortfolioRoutingModule {}