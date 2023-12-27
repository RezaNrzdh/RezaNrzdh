import {Component, Input, OnInit} from '@angular/core';
import {SkillsService} from "../../../../core/services/skills.service";

@Component({
    selector: 'app--home-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    @Input() isMobile: boolean;

    experience: any;

    constructor(private skillService: SkillsService) { }

    ngOnInit(): void {
        this.experience = this.skillService.getSkills().subscribe({
            next: ((value: any) => {
                this.experience = value;
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });
    }
}
