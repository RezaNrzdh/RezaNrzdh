import {Component, OnInit} from "@angular/core";
import {StatisticsComponent} from "./statistics/statistics.component";
import {InformationComponent} from "./information/information.component";

@Component({
    selector: "admin-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
    imports: [
        StatisticsComponent,
        InformationComponent
    ],
    standalone: true
})
export class DashboardComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }
}
