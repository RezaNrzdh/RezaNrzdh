import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PortfolioComponent} from "./list/portfolio.component";
import {PortfolioNewComponent} from "./detail/portfolio-new.component";

const routes: Routes = [
    { path: "", component: PortfolioComponent },
    { path: ":slug", component: PortfolioNewComponent },
    { path: "new", component: PortfolioNewComponent }
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})
export class PortfolioRoutingModule {}
