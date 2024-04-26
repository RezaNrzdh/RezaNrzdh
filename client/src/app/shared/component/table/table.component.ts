import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import {ImagePathPipe} from "../../pipe/image-path.pipe";
import {CalendarPipe} from "../../pipe/calendar.pipe";
import {CategoryPipe} from "../../pipe/category.pipe";
import {PublishPipe} from "../../pipe/publish.pipe";
import {TagComponent} from "../tag/tag.component";
import {IconComponent} from "../icon/icon.component";
import {ButtonComponent} from "../button/button.component";

@Component({
    selector: "admin-table",
    templateUrl: "table.component.html",
    styleUrls: ["table.component.scss"],
    imports: [
        ImagePathPipe,
        CalendarPipe,
        CategoryPipe,
        PublishPipe,
        TagComponent,
        IconComponent,
        ButtonComponent
    ],
    standalone: true
})
export class TableComponent implements OnInit {

    @Input() data: Array<PortfolioModel>
    @Input() tableHeaders: Array<string>;
    @Input() columns: Array<number>;
    @Input() count: number;
    @Output() action: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    OnAction(): void {
        this.action.emit();
    }
}
