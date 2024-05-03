import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AboutService} from "../../../../core/services/about.service";
import {ActivatedRoute} from "@angular/router";
import {TextboxComponent} from "../../../../shared/component/textbox/textbox.component";
import {ButtonComponent} from "../../../../shared/component/button/button.component";
import {AlertService} from "../../../../core/services/alert.service";
import {AlertStateEnum} from "../../../../core/enum/alertState.enum";
import {AlertEnum} from "../../../../core/enum/alert.enum";

@Component({
    selector: "admin-experience",
    templateUrl: "experience.component.html",
    styleUrls: ["experience.component.scss"],
    standalone: true,
    imports: [
        TextboxComponent,
        ButtonComponent,
        ReactiveFormsModule
    ]
})
export class ExperienceComponent implements OnInit {

    expForm: FormGroup | any;

    constructor(private aboutService: AboutService, private activatedRoute: ActivatedRoute, private alertService: AlertService) {
        this.expForm = new FormGroup({
            "year": new FormControl(null),
            "companyname": new FormControl(null),
            "from": new FormControl(null),
            "desc": new FormControl(null),
            "reason": new FormControl(null)
        });
    }

    ngOnInit() {
        if(this.activatedRoute.snapshot.params["id"] !== "new") {
            this.aboutService.GetExperienceOne(this.activatedRoute.snapshot.params["id"]).subscribe({
                next: ((value: any) => {
                    this.expForm.setValue({
                        year: value.year,
                        companyname: value.companyname,
                        from: value.from,
                        desc: value.desc,
                        reason: value.reason
                    })
                })
            })
        }
    }

    OnSubmit(): void {
        const query = {
            ...this.expForm.value,
            id: parseInt(this.activatedRoute.snapshot.params["id"])
        }
        this.aboutService.ModifyExperience(query).subscribe({
            next: ((value: any) => {
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
