import {Component, OnInit} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {PortfolioModel} from "../../../core/models/portfolio.model";

@Component({
    selector: "admin-portfolio",
    templateUrl: "portfolio.component.html",
    styleUrls: ["portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {

    data: Array<PortfolioModel>;
    skip: number = 0;
    limit: number = 16;
    sortBy: string = "id";

    constructor(private portfolioService: PortfolioService) {}

    ngOnInit() {
        const query = {
            skip: this.skip,
            limit: this.limit,
            sortBy: this.sortBy
        }
        this.portfolioService.GetAllPortfolio(query).subscribe({
            next: ((value: any) => {
                this.data = value.data;
            })
        })
    }
}
