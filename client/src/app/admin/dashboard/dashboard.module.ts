import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
    providers: [],
    imports: [
        DashboardRoutingModule,
        DashboardComponent
    ]
})
export class DashboardModule{}
