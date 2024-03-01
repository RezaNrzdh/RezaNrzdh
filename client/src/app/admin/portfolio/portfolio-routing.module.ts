import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PortfolioListComponent} from "./list/portfolio-list.component";
import {PortfolioComponent} from "./detail/portfolio.component";

const routes: Routes = [
    { path: "", component: PortfolioListComponent },
    { path: ":slug", component: PortfolioComponent },
    { path: "new", component: PortfolioComponent }
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})
export class PortfolioRoutingModule {}
