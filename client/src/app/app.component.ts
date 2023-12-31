import {Component, enableProdMode, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {ResponsiveEnum} from "./core/enum/responsive.enum";
import {ResponsiveService} from "./core/services/responsive.service";
import {AuthService} from "./core/services/auth.service";
import {UserService} from "./core/services/user.service";

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
        private breakpointObserver: BreakpointObserver,
        private authService: AuthService,
        private userService: UserService
    ) {
        let responsiveArray = [ResponsiveEnum.XSMALL, ResponsiveEnum.SMALL, ResponsiveEnum.MEDIUM, ResponsiveEnum.LARGE];
        this.breakpointObserver.observe(responsiveArray).subscribe((value) => {
            this.reponsiveService.setXSmall = value.breakpoints[ResponsiveEnum.XSMALL];
            this.reponsiveService.setSmall  = value.breakpoints[ResponsiveEnum.SMALL];
            this.reponsiveService.setMedium = value.breakpoints[ResponsiveEnum.MEDIUM];
            this.reponsiveService.setLarge  = value.breakpoints[ResponsiveEnum.LARGE];
        })
    }

    ngOnInit() {
        this.authService.Verify().subscribe({
            next: ((value: any) => {
                value ? this.userService.SetUserInfo = value : null;
            }),
            error: ((error: any) => {
                console.log(error);
            })
        });
    }
}
