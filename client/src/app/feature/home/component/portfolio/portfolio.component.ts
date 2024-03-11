import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from "../../../../core/services/portfolio.service";
import {ResponsiveService} from "../../../../core/services/responsive.service";
import {PortfolioModel} from "../../../../core/models/portfolio.model";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../../core/enum/responsive.enum";
import {CategoryConstant} from "../../../../core/constant/category.constant";
import { IconComponent } from '../../../../shared/component/icon/icon.component';
import { RouterLink } from '@angular/router';
import { PortfolioCardComponent } from '../../../../shared/component/portfolioCard/portfolio-card.component';
import { DropdownComponent } from '../../../../shared/component/dropdown/dropdown.component';
import { ButtonComponent } from '../../../../shared/component/button/button.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-home-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, ButtonComponent, DropdownComponent, PortfolioCardComponent, RouterLink, IconComponent]
})
export class PortfolioComponent implements OnInit, OnDestroy {

    data: Array<PortfolioModel>;

    isMedium: boolean = false;
    isSmall: boolean = false;

    options: Array<string> = [...CategoryConstant];
    tab: number = 0;
    query: any = {};

    sub: Subscription;

    constructor(private portfolioService: PortfolioService, private responsiveService: ResponsiveService ) {
        this.sub = this.responsiveService.breakpoint.subscribe({
            next: ((value: any) => {
                value[ResponsiveEnum.MEDIUM] ? this.isMedium = true : this.isMedium = false;
                value[ResponsiveEnum.SMALL] ? this.isSmall = true : this.isSmall = false;
            })
        })
    }

    ngOnInit(): void {
        this.OnGetTopPortfolio();
    }

    OnGetTopPortfolio(cat: number = 1): void {
        this.portfolioService.GetTopPortfolio(cat).subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });
    }

    SetCurrentTab(value: number): void {
        if(this.tab == value) return;
        this.tab = value;
        this.OnGetTopPortfolio(this.tab + 1);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
