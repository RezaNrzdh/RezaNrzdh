import {Component, DoCheck, HostBinding} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {ResponsiveService} from "../../../core/services/responsive.service";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})
export class HeaderComponent implements DoCheck {

    internalPages: boolean = false;
    ShowSidebar: boolean = false;

    isXSmall: boolean = false;
    isSmall: boolean = false;
    isMedium: boolean = false;
    isLarge: boolean = false;

    constructor(private router: Router, private responsiveService: ResponsiveService) {
        this.IsInternalPage(this.router);
    }

    @HostBinding('class.internalPages') get t() { return this.internalPages };

    ngDoCheck() {
        this.isXSmall = this.responsiveService.getXSmall;
        this.isSmall = this.responsiveService.getSmall;
        this.isMedium = this.responsiveService.getMedium;
        this.isLarge = this.responsiveService.getLarge;
    }

    OnToggleSidebar(): void {
        this.ShowSidebar = !this.ShowSidebar;
    }

    IsInternalPage(router: Router): void {
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd){
                if(router.url === "/"){
                    this.internalPages = false;
                }
                else{
                    this.internalPages = true;
                }
            }
        });
    }
}

