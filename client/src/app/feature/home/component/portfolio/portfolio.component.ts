import {Component, DoCheck, OnInit} from '@angular/core';
import {PortfolioService} from "../../../../core/services/portfolio.service";
import {ResponsiveService} from "../../../../core/services/responsive.service";
import {PortfolioModel} from "../../../../core/models/portfolio.model";

@Component({
    selector: 'app-home-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, DoCheck {

    data: Array<PortfolioModel>;
    isSmall: boolean = false;
    options: Array<string> = ['طراحی وب','توسعه وب','بازیسازی','برندینگ','گرافیک'];

    constructor(private portfolioService: PortfolioService, private responsiveService: ResponsiveService ) { }

    ngOnInit(): void {
        this.portfolioService.GetTopPortfolio().subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });
    }

    ngDoCheck() {
        this.isSmall = this.responsiveService.getSmall;
    }

}
