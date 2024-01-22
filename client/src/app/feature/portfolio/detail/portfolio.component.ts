import {Component, OnInit} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {FormControl, FormGroup} from "@angular/forms";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import {ActivatedRoute} from "@angular/router";
import {ResponsiveService} from "../../../core/services/responsive.service";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../core/enum/responsive.enum";

@Component({
    selector: "app-portfolio",
    templateUrl: "portfolio.component.html",
    styleUrls: ["portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {

    data: PortfolioModel;
    topPortfolio: Array<PortfolioModel>;
    currentImage: number = 0;
    commentForm: FormGroup;
    isMedium: boolean = false;
    isSmall: boolean = false;
    sub: Subscription;

    constructor(
        private PortfolioService: PortfolioService,
        private responsiveService: ResponsiveService,
        private activatedRoute: ActivatedRoute)
    {
        this.sub = responsiveService.breakpoint.subscribe({
            next: ((value: any) => {
                value[ResponsiveEnum.MEDIUM] ? this.isMedium = true : this.isMedium = false;
                value[ResponsiveEnum.SMALL] ? this.isSmall = true : this.isSmall = false;
            })
        })
    }

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

    SetCurrentImage(value: number): void {
        this.currentImage = value;
    }
}
