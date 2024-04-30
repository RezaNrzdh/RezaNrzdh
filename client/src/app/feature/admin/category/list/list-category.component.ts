import {Component, OnInit} from "@angular/core";
import {CalendarPipe} from "../../../../shared/pipe/calendar.pipe";
import {IconComponent} from "../../../../shared/component/icon/icon.component";
import {RouterLink} from "@angular/router";
import {SkillsService} from "../../../../core/services/skills.service";
import {NgFor} from "@angular/common";
import {ButtonComponent} from "../../../../shared/component/button/button.component";

@Component({
    selector: "admin-list-category",
    templateUrl: "list-category.component.html",
    styleUrls: ["list-category.component.scss"],
    standalone: true,
    imports: [
        CalendarPipe,
        IconComponent,
        NgFor,
        RouterLink,
        ButtonComponent
    ]
})
export class ListCategoryComponent implements OnInit {

    data: any;

    constructor(private skillService: SkillsService) {}

    ngOnInit() {
        this.skillService.getSkills().subscribe({
            next: ((skill: any) => {
                this.data = skill;
            })
        })
    }
}
