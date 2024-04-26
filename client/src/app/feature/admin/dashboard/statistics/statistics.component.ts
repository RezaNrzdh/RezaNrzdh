import {Component, OnInit} from "@angular/core";
import {NgFor} from "@angular/common";
import {IconComponent} from "../../../../shared/component/icon/icon.component";

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

    data: Array<any> = [
        { icon: "portfolio", key: "نمونه کارها", value: 17 },
        { icon: "note", key: "مقالات", value: 9 },
        { icon: "user2", key: "کاربران", value: 2 },
        { icon: "gallery", key: "عکس ها", value: 60 },
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
