import {Component, enableProdMode, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {ResponsiveEnum} from "./core/enum/responsive.enum";
import {ResponsiveService} from "./core/services/responsive.service";

enableProdMode();

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'RezaNrzdh';
    constructor(
        private reponsiveService: ResponsiveService ,
        private breakpointObserver: BreakpointObserver
    ) {
        let responsiveArray = [ResponsiveEnum.XSMALL, ResponsiveEnum.SMALL, ResponsiveEnum.MEDIUM, ResponsiveEnum.LARGE];
        this.breakpointObserver.observe(responsiveArray).subscribe((value) => {
            this.reponsiveService.ChangeResolution(value.breakpoints);
            // this.reponsiveService.setXSmall = value.breakpoints[ResponsiveEnum.XSMALL];
            // this.reponsiveService.setSmall  = value.breakpoints[ResponsiveEnum.SMALL];
            // this.reponsiveService.setMedium = value.breakpoints[ResponsiveEnum.MEDIUM];
            // this.reponsiveService.setLarge  = value.breakpoints[ResponsiveEnum.LARGE];
        })
    }

    ngOnInit() {}
}
