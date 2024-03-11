import {NgModule} from "@angular/core";
import {ImagesComponent} from "./images.component";
import {ImagesRoutingModule} from "./images-routing.module";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
    ImagesRoutingModule,
    CommonModule,
    ImagesComponent
]
})
export class ImagesModule {}
