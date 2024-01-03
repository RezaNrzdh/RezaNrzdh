import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";
import {CheckBreakpointService} from "../../core/resolver/CheckBreakpoint.service";

const routes: Routes = [
    { path: "", component: AboutComponent, resolve: { data: CheckBreakpointService }}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutRoutingModule {}
