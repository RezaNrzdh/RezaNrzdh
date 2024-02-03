import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from "../../../core/services/portfolio.service";
import {ResponsiveService} from "../../../core/services/responsive.service";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../core/enum/responsive.enum";
import {SortEnum} from "../../../core/enum/sort.enum";
import {CategoryConstant} from "../../../core/constant/category.constant";
import {SortConstant} from "../../../core/constant/sort.constant";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit, OnDestroy {

    data: Array<PortfolioModel>;
    isXSmall: boolean = false;
    isSmall: boolean = false;
    sortNum: SortEnum = SortEnum.NEWEST;
    options: Array<string> = ['همه', ...CategoryConstant];
    sorts: Array<string> = SortConstant;
    lt: number = 0;
    pagination: number = 8;
    tab: number = 0;
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
        this.OnGetAllPortfolio();
    }

    OnGetPortfolioByCategory(value: number): void {
        this.lt = 0;
        this.portfolioService.GetPortfolioByCategory(value).subscribe({
            next: ((value: any) => {
                this.data = value;
            })
        })
    }

    OnGetAllPortfolio(): void {
        this.portfolioService.GetAllPortfolio(this.lt, this.pagination).subscribe({
            next: ((value: any) => {
                this.data = value;
                this.lt = value[this.data.length - 1]._id;
            })
        });
    }

    OnGetMorePortofilo(): void {
        this.portfolioService.GetAllPortfolio(this.lt, this.pagination).subscribe({
            next: ((value: any) => {
                this.data = this.data.concat(value);
                this.lt = value[value.length - 1]._id;
            })
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    SetSort(value: number): void {
        switch (value){
            case 1: this.sortNum = SortEnum.NEWEST; break;
            case 2: this.sortNum = SortEnum.MOSTVISITED; break;
        }
    }

}
