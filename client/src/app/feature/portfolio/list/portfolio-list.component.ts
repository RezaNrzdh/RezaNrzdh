import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from "../../../core/services/portfolio.service";
import {ResponsiveService} from "../../../core/services/responsive.service";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../core/enum/responsive.enum";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit, OnDestroy {

    data: Array<PortfolioModel>;
    isXSmall: boolean = false;
    isSmall: boolean = false;
    options: Array<string> = ['همه','طراحی وب','توسعه وب','بازیسازی','گرافیک'];
    sorts: Array<string> = ['جدیدترین','پربازدیدترین'];
    sub: Subscription;

    constructor(private portfolioService: PortfolioService, private responsiveService: ResponsiveService) {
        this.sub = this.responsiveService.breakpoint.subscribe({
            next: ((value: any) => {
                value[ResponsiveEnum.SMALL] ? this.isSmall = true : this.isSmall = false;
                value[ResponsiveEnum.XSMALL] ? this.isXSmall = true : this.isXSmall = false;
            })
        })
    }

    ngOnInit(): void {
        this.portfolioService.GetAllPortfolio().subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
