import {Component} from "@angular/core";
import {CategoryConstant} from "../../../core/constant/category.constant";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PortfolioService} from "../../../core/services/portfolio.service";

@Component({
    selector: "admin-portfolio-new",
    templateUrl: "portfolio-new.component.html",
    styleUrls: ["portfolio-new.component.scss"]
})
export class PortfolioNewComponent {

    portfolioForm: FormGroup | any;
    option: Array<string> = [...CategoryConstant];
    images: Array<string> = [];

    constructor(private portfolioService: PortfolioService) {
        this.portfolioForm = new FormGroup({
            "title": new FormControl(null, [Validators.required]),
            "slug": new FormControl(null, [Validators.required]),
            "category": new FormControl(null, [Validators.required]),
            "file": new FormControl(null),
            "desc": new FormControl(null, [Validators.required])
        })
    }

    OnSubmit(): void {
        if(this.portfolioForm.status === "INVALID") return;

        this.portfolioService.CreatePortfolio(this.portfolioForm.value).subscribe({
            next: ((value: any) => {
                console.log(value);
            })
        })
    }

    OnAddImages(value: any): void {
        this.images = [...this.images, value.filename];
    }
}
