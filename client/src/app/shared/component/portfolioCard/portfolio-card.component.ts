import {Component, Input, OnInit} from "@angular/core";
import {environment} from "../../../../environments/environment";

@Component({
    selector: "app-portfoliocard",
    templateUrl: "portfolio-card.component.html",
    styleUrls: ["portfolio-card.component.scss"]
})
export class PortfolioCardComponent implements OnInit {

    @Input() title: string;
    @Input() slug: string;
    @Input() category: number;
    @Input() visit: number = 0;
    @Input() like:  number = 0;
    @Input() imageURL: string;

    @Input() isOutline: boolean = false;
    @Input() isList: boolean = true;

    env: string = environment.static;

    constructor() {}

    ngOnInit() {}
}
