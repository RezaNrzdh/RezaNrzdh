import {Component, OnInit} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: "app-portfolio",
    templateUrl: "portfolio.component.html",
    styleUrls: ["portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {

    data: any;
    commentForm: FormGroup;

    constructor(private PortfolioService: PortfolioService) {}

    ngOnInit() {
        this.data = this.PortfolioService.GetTopPortfolio();

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
