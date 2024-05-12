import {Component, OnInit} from "@angular/core";
import {NgFor} from "@angular/common";
import {IconComponent} from "../../../../shared/component/icon/icon.component";
import {DashboardService} from "../../../../core/services/dashboard.service";

@Component({
    selector: "app-statistics",
    templateUrl: "statistics.component.html",
    styleUrls: ["statistics.component.scss"],
    standalone: true,
    imports: [
        NgFor,
        IconComponent
    ]
})
export class StatisticsComponent implements OnInit {

    data: any;

    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.dashboardService.GetStatistics().subscribe({
            next: ((value: any) => {
                this.data = value;
            })
        });
    }
}
