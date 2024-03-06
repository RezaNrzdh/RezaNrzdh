import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"]
})
export class HomeComponent implements OnInit {

    userAgent: any;
    isMobile: boolean = false;
    pattern = /mobile/i;

    constructor(private titleService: Title) {
        this.titleService.setTitle("RezaNrzdh - Home")
    }

    ngOnInit() {
        this.isMobile = this.pattern.test(navigator.userAgent);
    }
}
