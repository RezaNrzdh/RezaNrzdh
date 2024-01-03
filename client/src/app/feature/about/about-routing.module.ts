import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";
import {CheckTokenService} from "../../core/resolver/checkToken.service";

const routes: Routes = [
    { path: "", component: AboutComponent, resolve: { data: CheckTokenService }}
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
