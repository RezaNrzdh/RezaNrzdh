import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from "../../../core/services/portfolio.service";
import {ResponsiveService} from "../../../core/services/responsive.service";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../core/enum/responsive.enum";
import {Title} from "@angular/platform-browser";
import { PortfolioCardComponent } from '../../../shared/component/portfolioCard/portfolio-card.component';
import { DropdownComponent } from '../../../shared/component/dropdown/dropdown.component';
import { ButtonComponent } from '../../../shared/component/button/button.component';
import { NgIf, NgFor } from '@angular/common';
import {CategoryComponent} from "./category/category.component";
import {SortComponent} from "./sort/sort.component";
import {LoaderComponent} from "../../../shared/component/loading/loader.component";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, ButtonComponent, DropdownComponent, PortfolioCardComponent, CategoryComponent, SortComponent, LoaderComponent]
})
export class PortfolioListComponent implements OnInit, OnDestroy {

    isLoading: boolean = true;

    data: Array<PortfolioModel> = new Array<PortfolioModel>();

    isXSmall: boolean = false;
    isSmall: boolean = false;

    currentTab: number = 0;

    isLastPage: boolean = false;
    skip: number = 0;
    count: number = 9999;
    limit: number = 8;
    sortBy: string = "id";
    query: any = {};

    isSpin: boolean = false;

    sub: Subscription;

    constructor(private portfolioService: PortfolioService, private responsiveService: ResponsiveService, private titleService: Title) {
        this.titleService.setTitle("RezaNrzdh - Portfolio");
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
        this.skip = 0;
        this.query = {};

        if (cat != null) {
            if(cat != 0){
                this.query.cat = cat;
            }
            this.SetTabIndex(cat);
        }

        this.query.skip    = this.skip;
        this.query.limit   = this.limit;
        this.query.sortBy  = this.sortBy;
        this.query.publish = 2;

        this.portfolioService.GetAllPortfolio(this.query).subscribe({
            next: ((value: any) => {
                this.data = value.data;
                this.count = value.count - this.limit;
                this.skip = this.skip + this.limit;
                this.IsLastPage();
                this.isLoading = false;
            })
        });
    }

    OnGetMorePortofilo(): void {
        this.query = { ...this.query, skip: this.skip };
        this.isSpin = true;
        this.portfolioService.GetAllPortfolio(this.query).subscribe({
            next: ((value: any) => {
                this.data = this.data.concat(value.data);
                this.skip = this.skip + this.limit;
                this.count = this.count - value.data.length;
                this.isSpin = false;
                this.IsLastPage();
            })
        });
    }

    IsLastPage(): void {
        this.isLastPage = this.count <= 0;
    }

    SetTabIndex(value: number): void{
        this.currentTab = value;
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
