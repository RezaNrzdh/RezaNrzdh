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
    count: number = 0;
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
                this.count = value.count - this.limit;
                this.skip  = this.limit;
                this.data  = value.data;
            })
        });
    }

    OnGetMorePortfolio(): void {
        const query = {
            skip: this.skip,
            limit: this.limit,
            sortBy: this.sortBy
        }
        this.portfolioService.GetAllPortfolio(query).subscribe({
            next: ((value: any) => {
                this.count = this.count - value.data.length;
                this.skip  = this.limit + this.skip;
                this.data  = this.data.concat(value.data);
            })
        });
    }
}
