import {Component, OnInit} from "@angular/core";
import {AboutService} from "../../../../core/services/about.service";
import {NgFor} from "@angular/common";
import {TextboxComponent} from "../../../../shared/component/textbox/textbox.component";
import {ButtonComponent} from "../../../../shared/component/button/button.component";
import {TagComponent} from "../../../../shared/component/tag/tag.component";

@Component({
    selector: "admin-skill-list",
    templateUrl: "skill-list.component.html",
    styleUrls: ["skill-list.component.scss"],
    standalone: true,
    imports: [
        NgFor,
        TextboxComponent,
        ButtonComponent,
        TagComponent
    ]
})
export class SkillListComponent implements OnInit {

    data: any;

    constructor(private aboutService: AboutService) {
    }

    ngOnInit() {
        this.aboutService.GetSkills().subscribe({
            next: ((skills: any) => {
                this.data = skills.skills;
            })
        })
    }
}
