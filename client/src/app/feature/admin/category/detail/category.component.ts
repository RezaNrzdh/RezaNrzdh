import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {SkillsService} from "../../../../core/services/skills.service";
import {ActivatedRoute} from "@angular/router";
import {TextboxComponent} from "../../../../shared/component/textbox/textbox.component";
import {ButtonComponent} from "../../../../shared/component/button/button.component";

@Component({
    selector: "admin-category",
    templateUrl: "category.component.html",
    styleUrls: ["category.component.scss"],
    standalone: true,
    imports: [
        TextboxComponent,
        ReactiveFormsModule,
        ButtonComponent
    ]
})
export class CategoryComponent implements OnInit {

    categoryForm: FormGroup | any;

    constructor(private skillService: SkillsService, private activatedRoute: ActivatedRoute) {
        this.categoryForm = new FormGroup({
            "title": new FormControl(null),
            "levelName": new FormControl(null),
            "level": new FormControl(null),
            "desc": new FormControl(null)
        })
    }

    ngOnInit() {
        if(this.activatedRoute.snapshot.params["id"] != "new"){
            this.skillService.getSkillOne(this.activatedRoute.snapshot.params["id"]).subscribe({
                next: ((value: any) => {
                    this.categoryForm.setValue({
                        title: value.title,
                        levelName: value.levelName,
                        level: value.level,
                        desc: value.desc
                    });
                })
            })
        }
    }

    OnSubmit(): void {
        let body = {
            id: this.activatedRoute.snapshot.params["id"],
            ...this.categoryForm.value
        }
        this.skillService.ModifySkill(body).subscribe({
            next: (() => {})
        })
    }
}
