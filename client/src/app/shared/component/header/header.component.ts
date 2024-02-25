import {Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild} from "@angular/core";
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
    displayMenu: boolean    = false;

    isXSmall: boolean = false;
    isMedium: boolean = false;

    handler: any;

    @HostBinding('class.internalPages') get t() { return this.internalPages };
    @ViewChild("popup") popuop: ElementRef;

    constructor(
        private router: Router,
        private responsiveService: ResponsiveService,
        private authService: AuthService,
        private userService: UserService,
        private renderer: Renderer2)
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
                value[ResponsiveEnum.XSMALL] ? this.isXSmall = true : this.isXSmall = false;
                value[ResponsiveEnum.MEDIUM] ? this.isMedium = true : this.isMedium = false;
            }),
            error: ((err: any) => {
                console.log(err);
            })
        });
    }

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

    OnDisplayMenu(): void {
        this.displayMenu = !this.displayMenu;
        if(this.displayMenu){
            this.handler = this.renderer.listen(document,"click", (t:any) => {
                if(!this.popuop.nativeElement.contains(t.target)){
                    this.displayMenu = false;
                    this.handler();
                }
            })
        }else{
            this.handler();
        }
    }

    OnSignOut(): void {
        this.authService.SignOut().subscribe({
            next: ((value: any) => {
                this.isLoggedIn = value;
            })
        })
    }

    ngOnDestroy() {
        this.subUserService.unsubscribe();
        this.subBreakpoint.unsubscribe();
    }
}

