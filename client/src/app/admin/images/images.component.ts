import {Component, OnInit} from "@angular/core";
import {ImagesService} from "../../core/services/images.service";
import {environment} from "../../../environments/environment";

@Component({
    selector: "admin-images",
    templateUrl: "images.component.html",
    styleUrls: ["images.component.scss"]
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
