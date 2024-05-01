import {Component, OnInit} from "@angular/core";
import {AboutService} from "../../../../core/services/about.service";
import {ActivatedRoute} from "@angular/router";
import {TextboxComponent} from "../../../../shared/component/textbox/textbox.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../../shared/component/button/button.component";

@Component({
    selector: "admin-language",
    templateUrl: "language.component.html",
    styleUrls: ["language.component.scss"],
    standalone: true,
    imports: [
        TextboxComponent,
        ButtonComponent,
        ReactiveFormsModule
    ]
})
export class LanguagesComponent implements OnInit {

    languageForm: FormGroup | any;

    constructor(private aboutService: AboutService, private activatedRoute: ActivatedRoute) {
        this.languageForm = new FormGroup({
            "title": new FormControl(null),
            "cefr": new FormControl(null),
            "level": new FormControl(null)
        })
    }

    ngOnInit() {
        this.aboutService.GetLanguagesOne(this.activatedRoute.snapshot.params["id"]).subscribe({
            next: ((value) => {
                this.languageForm.setValue({
                    title: value.title,
                    cefr: value.cefr,
                    level: value.level
                })
            })
        })
    }

    OnSubmit(): void {
        const query = {
            ...this.languageForm.value,
            id: parseInt(this.activatedRoute.snapshot.params["id"])
        }
        console.log(query);
        this.aboutService.ModifyLanguageOne(query).subscribe({
            next: ((value) => {
                console.log(value);
            })
        })
    }

}
