import {Component, Input, OnInit} from "@angular/core";
import {PortfolioModel} from "../../../core/models/portfolio.model";

@Component({
    selector: "admin-table",
    templateUrl: "table.component.html",
    styleUrls: ["table.component.scss"]
})
export class TableComponent implements OnInit {
    @Input() tableHeaders: Array<string>;
    @Input() data: Array<PortfolioModel>

    constructor() {}

    ngOnInit() {}
}