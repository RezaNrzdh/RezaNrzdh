import {Component, Input, OnInit} from '@angular/core';
import {SkillsService} from "../../../core/services/skills.service";
import {ExperienceModel} from "../../../core/models/experience.model";
import { IconComponent } from '../../../shared/component/icon/icon.component';
import {NgFor, NgClass, NgIf} from '@angular/common';
import {CarouselDirective} from "../../../shared/directive/carousel.directive";

@Component({
    selector: 'app--home-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf, IconComponent, NgClass, CarouselDirective]
})
export class ExperienceComponent implements OnInit {

    @Input() isMobile: boolean;

    experience: Array<ExperienceModel>;

    constructor(private skillService: SkillsService) { }

    ngOnInit(): void {
        this.skillService.getSkills().subscribe({
            next: ((value: any) => {
                this.experience = value;
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });
    }
}
