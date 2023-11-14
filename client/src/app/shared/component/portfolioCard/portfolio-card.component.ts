import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-portfoliocard",
    templateUrl: "portfolio-card.component.html",
    styleUrls: ["portfolio-card.component.scss"]
})
export class PortfolioCardComponent implements OnInit {
    @Input() title: string = "لورم ایپسوم";
    @Input() date: string = "23 اردیبهشت 1423";
    @Input() visit: number = 0;
    @Input() like:  number = 0;

    ngOnInit() {
    }
}
