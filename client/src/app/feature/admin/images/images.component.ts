import {Component, OnInit} from "@angular/core";
import {ImagesService} from "../../../core/services/images.service";
import {environment} from "../../../../environments/environment";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { NgFor } from "@angular/common";
import {AlertService} from "../../../core/services/alert.service";
import {AlertStateEnum} from "../../../core/enum/alertState.enum";
import {AlertEnum} from "../../../core/enum/alert.enum";

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

    constructor(private imageService: ImagesService, private alertService: AlertService) {}

    ngOnInit() {
        this.imageService.GetAllImages().subscribe({
            next: ((images: any) => {
                this.images = images;
            })
        })
    }

    OnDeleteImages(imageName: string): void {
        this.imageService.DeleteImage(imageName).subscribe({
            next: ((value: any) => {
                if(value){
                    const index = this.images.indexOf(imageName);
                    if(index > -1) this.images.splice(index,1);
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.SUCCESS, msg: AlertEnum.SuccessSubmit});
                }
                else {
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.DANGER, msg: AlertEnum.fatalError});
                }
            })
        })
    }
}
