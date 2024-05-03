import {Component, OnInit} from "@angular/core";
import {AboutService} from "../../../../core/services/about.service";
import {TextboxComponent} from "../../../../shared/component/textbox/textbox.component";
import {ButtonComponent} from "../../../../shared/component/button/button.component";
import {ActivatedRoute} from "@angular/router";
import {NgFor} from "@angular/common";
import {IconComponent} from "../../../../shared/component/icon/icon.component";
import {FormsModule} from "@angular/forms";

interface skills {
    title?: string;
    skill: Array<string>;
}

@Component({
    selector: "admin-skill",
    templateUrl: "skill.component.html",
    styleUrls: ["skill.component.scss"],
    standalone: true,
    imports: [
        TextboxComponent,
        ButtonComponent,
        NgFor,
        IconComponent,
        FormsModule
    ]
})
export class SkillComponent implements OnInit {

    data: skills = {title: "", skill: []};

    constructor(private aboutService: AboutService, private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        this.aboutService.GetSkillOne(this.activatedRoute.snapshot.params["id"]).subscribe({
            next: ((value: any) => {
                this.data = value;
            })
        })
    }

    AddSkill(newSkill: HTMLInputElement): void {
        if(newSkill.value === null || newSkill.value === "")
            return;

        this.data = {
            ...this.data,
            skill: [...this.data.skill, newSkill.value]
        }
    }

    DeleteSkill(index: number): void {
        this.data.skill.splice(index,1);
    }

    OnSubmit(value: any): void {
        const query = {
            id: parseInt(this.activatedRoute.snapshot.params["id"]),
            skill: Object.values(value)
        }
        this.aboutService.ModifySkills(query).subscribe({
            next:((value: any) => {
                console.log(value);
            })
        })
    }
}
