import {Component, HostBinding} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})
export class HeaderComponent {

    internalPages: boolean = false;

    constructor(private router: Router ) {
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

    @HostBinding('class.internalPages') get t() { return this.internalPages };
}
