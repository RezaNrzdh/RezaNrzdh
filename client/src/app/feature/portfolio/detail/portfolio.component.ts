import {Component, OnInit} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {FormControl, FormGroup} from "@angular/forms";
import {PortfolioModel} from "../../../core/models/portfolio.model";

@Component({
    selector: "app-portfolio",
    templateUrl: "portfolio.component.html",
    styleUrls: ["portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {

    data: Array<PortfolioModel>;
    commentForm: FormGroup;

    constructor(private PortfolioService: PortfolioService) {}

    ngOnInit() {
        this.PortfolioService.GetTopPortfolio().subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((error: any) => {
                console.log(error);
            })
        });

        this.commentForm = new FormGroup({
            "name": new FormControl("null"),
            "email": new FormControl("null"),
            "comment": new FormControl("null")
        })
    }

    OnSubmit(): void {
        console.log(this.commentForm.value);
    }
}
