import {Component, ElementRef, HostBinding, OnDestroy, Renderer2, ViewChild} from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import {ResponsiveService} from "../../../core/services/responsive.service";
import {AuthService} from "../../../core/services/auth.service";
import {UserService} from "../../../core/services/user.service";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../core/enum/responsive.enum";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { NgIf } from "@angular/common";
import {ProfileComponent} from "../profile/profile.component";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
    standalone: true,
    imports: [NgIf, IconComponent, RouterLink, RouterLinkActive, ButtonComponent, SidebarComponent, ProfileComponent]
})
export class HeaderComponent implements OnDestroy {

    subUserService: Subscription;
    subBreakpoint: Subscription;

    internalPages: boolean = false;
    ShowSidebar: boolean   = false;
    isLoggedIn: boolean    = false;
    displayMenu: boolean   = false;
    toggleProfile: boolean = false;

    isXSmall: boolean = false;
    isMedium: boolean = false;

    role: number;
    handler: any;

    @HostBinding('class.internalPages') get t() { return this.internalPages };
    @ViewChild("popup") popup: ElementRef;

    constructor(
        private router: Router,
        private responsiveService: ResponsiveService,
        private authService: AuthService,
        private renderer: Renderer2,
        private userService: UserService)
    {
        this.IsInternalPage(this.router);
        this.subUserService = this.userService.userInfo.subscribe({
            next: ((value: any) => {
                if(value.email) {
                    this.isLoggedIn = true;
                    this.role = value.role;
                }
                else {
                    this.isLoggedIn = false;
                }
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
            this.handler = this.renderer.listen(document, "click", (e) => {
                if(!this.popup.nativeElement.contains(e.target)){
                    this.handler();
                    this.displayMenu = false;
                }
            });
        }
        else {
            this.handler();
        }
    }

    OnSignOut(): void {
        this.handler();
        this.authService.SignOut().subscribe({
            next: ((value: any) => {
                this.isLoggedIn = value;
            })
        })
    }

    ToggleProfile(): void {
        this.OnDisplayMenu();
        this.toggleProfile = !this.toggleProfile;
    }

    ngOnDestroy() {
        this.subUserService.unsubscribe();
        this.subBreakpoint.unsubscribe();
    }
}

