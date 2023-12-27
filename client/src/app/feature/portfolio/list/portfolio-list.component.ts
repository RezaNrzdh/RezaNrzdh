import {Component, DoCheck, OnInit} from '@angular/core';
import {PortfolioService} from "../../../core/services/portfolio.service";
import {ResponsiveService} from "../../../core/services/responsive.service";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit, DoCheck {

    data: any;
    isXSmall: boolean = false;
    isSmall: boolean = false;
    isMedium: boolean = false;
    isLarge: boolean = false;
    options: Array<string> = ['همه','طراحی وب','توسعه وب','بازیسازی','گرافیک'];
    sorts: Array<string> = ['جدیدترین','پربازدیدترین']

    constructor(private portfolioService: PortfolioService, private responsiveService: ResponsiveService) { }

    ngOnInit(): void {
        this.data = this.portfolioService.GetAllPortfolio().subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });
    }

    ngDoCheck() {
        this.isXSmall = this.responsiveService.getXSmall;
        this.isSmall = this.responsiveService.getSmall;
        this.isMedium = this.responsiveService.getMedium;
        this.isLarge = this.responsiveService.getLarge;
    }

}
