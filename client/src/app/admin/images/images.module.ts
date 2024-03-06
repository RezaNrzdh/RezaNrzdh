import {NgModule} from "@angular/core";
import {ImagesComponent} from "./images.component";
import {ImagesRoutingModule} from "./images-routing.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        ImagesComponent
    ],
    imports: [
        ImagesRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class ImagesModule {}
