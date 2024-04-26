import {Component, OnInit} from "@angular/core";
import {EmployersService} from "../../../../core/services/employers.service";
import {CalendarPipe} from "../../../../shared/pipe/calendar.pipe";
import {IconComponent} from "../../../../shared/component/icon/icon.component";
import {RouterLink} from "@angular/router";
import {NgFor, NgIf} from "@angular/common";
import {TagComponent} from "../../../../shared/component/tag/tag.component";
import {PublishPipe} from "../../../../shared/pipe/publish.pipe";
import {ButtonComponent} from "../../../../shared/component/button/button.component";

@Component({
    selector: "admin-employer-list",
    templateUrl: "employer-list.component.html",
    styleUrls: ["employer-list.component.scss"],
    standalone: true,
    imports: [
        CalendarPipe,
        IconComponent,
        NgFor,
        NgIf,
        RouterLink,
        TagComponent,
        PublishPipe,
        ButtonComponent
    ]
})
export class EmployerListComponent implements OnInit {

    data: any;

    constructor(private employerService: EmployersService) {
    }

    ngOnInit() {
        this.employerService.GetEmployersComment().subscribe({
            next: ((comments: any) => {
                this.data = comments;
            })
        })
    }

}
