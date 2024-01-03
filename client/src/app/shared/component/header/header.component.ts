import {Component, HostBinding, OnDestroy, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {ResponsiveService} from "../../../core/services/responsive.service";
import {AuthService} from "../../../core/services/auth.service";
import {UserService} from "../../../core/services/user.service";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../core/enum/responsive.enum";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {

    subUserService: Subscription;
    subBreakpoint: Subscription;

    internalPages: boolean = false;
    ShowSidebar: boolean   = false;
    isLoggedIn: boolean    = false;

    isXSmall: boolean = false;
    isMedium: boolean = false;

    constructor(
        private router: Router,
        private responsiveService: ResponsiveService,
        private authService: AuthService,
        private userService: UserService)
    {
        this.IsInternalPage(this.router);
        this.subUserService = this.userService.userInfo.subscribe({
            next: ((value: any) => {
                value ? this.isLoggedIn = true : this.isLoggedIn = false;
            }),
            error: ((err: any) => {
                console.log(err)
            })
        });

        this.subBreakpoint = this.responsiveService.breakpoint.subscribe({
            next: ((value: any) => {
                console.log(3);
                value[ResponsiveEnum.XSMALL] ? this.isXSmall = true : this.isXSmall = false;
                value[ResponsiveEnum.MEDIUM] ? this.isMedium = true : this.isMedium = false;
            }),
            error: ((err: any) => {
                console.log(err);
            })
        });
    }

    @HostBinding('class.internalPages') get t() { return this.internalPages };

    ngOnInit(): void {}

    OnToggleSidebar(): void {
        this.ShowSidebar = !this.ShowSidebar;
    }

    IsInternalPage(router: Router): void {
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd){
                router.url === "/" ? this.internalPages = false : this.internalPages = true;
            }
        });
    }

    ngOnDestroy() {
        this.subUserService.unsubscribe();
        this.subBreakpoint.unsubscribe();
    }
}

