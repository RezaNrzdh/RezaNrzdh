import {Component, OnInit} from "@angular/core";
import {ImagesService} from "../../core/services/images.service";
import {environment} from "../../../environments/environment";
import { IconComponent } from "../../shared/component/icon/icon.component";
import { NgFor } from "@angular/common";

@Component({
    selector: "admin-images",
    templateUrl: "images.component.html",
    styleUrls: ["images.component.scss"],
    standalone: true,
    imports: [NgFor, IconComponent]
})
export class ImagesComponent implements OnInit {

    images: Array<string> = [];
    env: string = environment.static;

    constructor(private imageService: ImagesService) {}

    ngOnInit() {
        this.imageService.GetAllImages().subscribe({
            next: ((images: any) => {
                this.images = images;
                console.log(this.images);
            })
        })
    }
}
