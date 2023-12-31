import {Component, DoCheck, HostBinding, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {ResponsiveService} from "../../../core/services/responsive.service";
import {AuthService} from "../../../core/services/auth.service";
import {UserService} from "../../../core/services/user.service";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})
export class HeaderComponent implements OnInit, DoCheck {

    internalPages: boolean = false;
    ShowSidebar: boolean   = false;
    isLoggedIn: boolean    = false;

    isXSmall: boolean = false;
    isSmall: boolean  = false;
    isMedium: boolean = false;
    isLarge: boolean  = false;

    constructor(
        private router: Router,
        private responsiveService: ResponsiveService,
        private authService: AuthService,
        private userService: UserService)
    {
        this.IsInternalPage(this.router);
    }

    @HostBinding('class.internalPages') get t() { return this.internalPages };

    ngOnInit(): void {
        this.userService.GetUserInfo ? this.isLoggedIn = true : this.isLoggedIn = false;
    }

    ngDoCheck() {
        this.isXSmall = this.responsiveService.getXSmall;
        this.isSmall  = this.responsiveService.getSmall;
        this.isMedium = this.responsiveService.getMedium;
        this.isLarge  = this.responsiveService.getLarge;
    }

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
}

