import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../../../core/services/portfolio.service";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

    data: any;

    constructor(private portfolioService: PortfolioService) { }

    ngOnInit(): void {
        this.data = this.portfolioService.myPortfolio();
    }

}
