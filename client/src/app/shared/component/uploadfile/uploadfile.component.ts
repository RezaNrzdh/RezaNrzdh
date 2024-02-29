import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";

@Component({
    selector: "app-uploadfile",
    templateUrl: "uploadfile.component.html",
    styleUrls: ["uploadfile.component.scss"]
})
export class UploadfileComponent implements OnInit {

    @Output() outData: EventEmitter<any> = new EventEmitter<any>();

    isLoading: boolean = false;
    formData: FormData = new FormData();

    constructor(private portfolioService: PortfolioService) {}

    ngOnInit() {
    }

    OnSaveImage(event: any): void {
        this.isLoading = true;
        this.formData.append("file", event.target.files[0]);
        this.portfolioService.SaveImage(this.formData).subscribe({
            next: ((value: any) => {
                this.outData.emit(value);
                this.isLoading = false;
                this.formData.delete("file");
            })
        })
    }
}