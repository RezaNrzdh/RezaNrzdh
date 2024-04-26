import {Component, OnInit} from "@angular/core";
import {AboutService} from "../../../../core/services/about.service";
import {NgFor} from "@angular/common";
import {ButtonComponent} from "../../../../shared/component/button/button.component";

@Component({
    selector: "admin-experience-list",
    templateUrl: "experience-list.component.html",
    styleUrls: ["experience-list.component.scss"],
    standalone: true,
    imports: [
        NgFor,
        ButtonComponent
    ]
})
export class ExperienceListComponent implements OnInit {

    data: any;

    constructor(private aboutService: AboutService) {
    }

    ngOnInit() {
        this.aboutService.GetExperience().subscribe({
            next: ((exp: any) => {
                this.data = exp.experience;
            })
        })
    }
}
