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

    options: Array<string> = ['همه', ...CategoryConstant];
    sortName: Array<string> = SortConstant;
    sortNum: SortEnum = SortEnum.NEWEST;

    currentTab: number = 0;
    isLastPage: boolean = false;
    lt: number = 0;
    limit: number = 16;
    sortBy: string = "id";
    query: any = {};

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

    OnGetAllPortfolio(cat?: number): void {
        this.lt = 0;
        this.query = {};

        if (cat != null) {
            if(cat != 0){
                this.query.cat = cat;
            }
            this.SetTabIndex(cat);
        }

        this.query.lt = this.lt;
        this.query.limit = this.limit;
        this.query.sortBy = this.sortBy;

        this.portfolioService.GetAllPortfolio(this.query).subscribe({
            next: ((value: any) => {
                if(this.CheckIsLastPage(value.length)) return;
                this.data = value;
                this.lt = value[this.data.length - 1]._id;
            })
        });
    }

    OnGetMorePortofilo(): void {
        this.portfolioService.GetAllPortfolio(this.query).subscribe({
            next: ((value: any) => {
                if(this.CheckIsLastPage(value.length)) return;
                this.data = this.data.concat(value);
                this.lt = value[value.length - 1]._id;
            })
        });
    }

    SetSort(value: number): void {
        switch (value){
            case 1:
                this.sortNum = SortEnum.NEWEST;
                this.OnNewestPortfolio();
                break;
            case 2:
                this.sortNum = SortEnum.MOSTVISITED;
                this.OnMostVisitedPortfolio();
                break;
        }
    }

    SetTabIndex(value: number): void{
        this.currentTab = value;
    }

    CheckIsLastPage(value: number): boolean {
        if(value == 0){
            this.isLastPage = true;
            return true;
        }
        else if (value < this.limit || this.lt - this.limit == 1) {
            this.isLastPage = true;
            return false;
        }
        else {
            return false;
        }
    }

    OnNewestPortfolio(): void {
        this.sortBy = 'id';
        this.OnGetAllPortfolio(this.currentTab);
    }

    OnMostVisitedPortfolio(): void {
        this.sortBy = 'visit';
        this.OnGetAllPortfolio(this.currentTab);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
