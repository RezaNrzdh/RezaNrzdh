import {Component, HostBinding, OnInit} from "@angular/core";
import {Router, NavigationStart} from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})
export class HeaderComponent implements OnInit {
    constructor( private router: Router) {
    }

    @HostBinding("attr.indexpage") CurrentRoute = true;

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if(event.url === "/"){
                    this.CurrentRoute = false;
                }
                else{
                    this.CurrentRoute = true;
                }
            }
        })

        if(this.router.url === "/"){
            this.CurrentRoute = false;
        }
        else{
            this.CurrentRoute = true;
        }
    }

}
