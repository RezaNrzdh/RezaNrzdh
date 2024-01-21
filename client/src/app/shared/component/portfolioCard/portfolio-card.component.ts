import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-portfoliocard",
    templateUrl: "portfolio-card.component.html",
    styleUrls: ["portfolio-card.component.scss"]
})
export class PortfolioCardComponent implements OnInit {

    @Input() isOutline: boolean = false;
    @Input() title: string;
    @Input() slug: string;
    @Input() category: string;
    @Input() visit: number = 0;
    @Input() like:  number = 0;
    @Input() imageURL: string;

    constructor() {}

    ngOnInit() {
    }
}
