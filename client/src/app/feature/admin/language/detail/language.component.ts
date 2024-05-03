import {Component, OnInit} from "@angular/core";
import {AboutService} from "../../../../core/services/about.service";
import {ActivatedRoute} from "@angular/router";
import {TextboxComponent} from "../../../../shared/component/textbox/textbox.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../../shared/component/button/button.component";
import {AlertService} from "../../../../core/services/alert.service";
import {AlertStateEnum} from "../../../../core/enum/alertState.enum";
import {AlertEnum} from "../../../../core/enum/alert.enum";

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

    constructor(private aboutService: AboutService, private activatedRoute: ActivatedRoute, private alertService: AlertService) {
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
        this.aboutService.ModifyLanguageOne(query).subscribe({
            next: ((value) => {
                if(value.acknowledged){
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.SUCCESS, msg: AlertEnum.SuccessSubmit});
                }
                else {
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.DANGER, msg: AlertEnum.DangerSubmit});
                }
            })
        })
    }

}
