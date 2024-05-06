import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {ImagesService} from "../../../core/services/images.service";
import { IconComponent } from "../icon/icon.component";
import { NgIf } from "@angular/common";
import {AlertService} from "../../../core/services/alert.service";
import {AlertEnum} from "../../../core/enum/alert.enum";
import {AlertStateEnum} from "../../../core/enum/alertState.enum";

@Component({
    selector: "app-uploadfile",
    templateUrl: "uploadfile.component.html",
    styleUrls: ["uploadfile.component.scss"],
    standalone: true,
    imports: [NgIf, IconComponent]
})
export class UploadfileComponent implements OnInit {

    @Output() outData: EventEmitter<any> = new EventEmitter<any>();

    isLoading: boolean = false;
    formData: FormData = new FormData();

    constructor(private imageService: ImagesService, private alertService: AlertService,) {}

    ngOnInit() {
    }

    OnSaveImage(event: any): void {
        this.isLoading = true;
        this.formData.append("file", event.target.files[0]);

        this.imageService.SaveImage2(this.formData).subscribe({
            next: ((value: any) => {
                this.isLoading = false;
                this.formData.delete("file");
                if(value){
                    this.outData.emit(value);
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({ type: AlertStateEnum.SUCCESS, msg: AlertEnum.SuccessSubmit});
                }
                else {
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({ type: AlertStateEnum.DANGER, msg: AlertEnum.fatalError});
                }
            })
        })
    }
}
