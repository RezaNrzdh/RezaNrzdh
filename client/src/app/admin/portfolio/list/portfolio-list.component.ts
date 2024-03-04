import {Component, OnInit} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import {environment} from "../../../../environments/environment";

@Component({
    selector: "admin-portfolio-list",
    templateUrl: "portfolio-list.component.html",
    styleUrls: ["portfolio-list.component.scss"]
})
export class PortfolioListComponent implements OnInit {

    data: Array<PortfolioModel>;
    skip: number = 0;
    limit: number = 16;
    sortBy: string = "id";
    env: string = environment.static;

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
