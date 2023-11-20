import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../../../../core/services/portfolio.service";

@Component({
    selector: 'app-home-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    data: any;

    constructor(private portfolioService: PortfolioService ) { }

    ngOnInit(): void {
        this.data = this.portfolioService.GetTopPortfolio();
    }

}
