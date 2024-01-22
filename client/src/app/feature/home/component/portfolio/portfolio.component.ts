import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from "../../../../core/services/portfolio.service";
import {ResponsiveService} from "../../../../core/services/responsive.service";
import {PortfolioModel} from "../../../../core/models/portfolio.model";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../../core/enum/responsive.enum";

@Component({
    selector: 'app-home-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

    data: Array<PortfolioModel>;
    isMedium: boolean = false;
    isSmall: boolean = false;
    options: Array<string> = ['طراحی وب','توسعه وب','بازیسازی','برندینگ','گرافیک'];
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
        this.portfolioService.GetTopPortfolio().subscribe({
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
