import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        HomeComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule{}