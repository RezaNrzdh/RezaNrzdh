import {Component, OnInit} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {FormControl, FormGroup} from "@angular/forms";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-portfolio",
    templateUrl: "portfolio.component.html",
    styleUrls: ["portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {

    data: PortfolioModel;
    topPortfolio: Array<PortfolioModel>;
    commentForm: FormGroup;

    constructor(private PortfolioService: PortfolioService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.PortfolioService.GetPortfolio(this.activatedRoute.snapshot.params["slug"]).subscribe({
            next: ((value: any) => {
                this.data = value;
            })
        })

        this.PortfolioService.GetTopPortfolio().subscribe({
            next: ((value: any) => {
                this.topPortfolio = value;
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
