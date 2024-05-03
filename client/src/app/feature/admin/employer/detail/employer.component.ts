import {Component, OnInit} from "@angular/core";
import {EmployersService} from "../../../../core/services/employers.service";
import {ActivatedRoute} from "@angular/router";
import {DropdownComponent} from "../../../../shared/component/dropdown/dropdown.component";
import {ButtonComponent} from "../../../../shared/component/button/button.component";
import {TextboxComponent} from "../../../../shared/component/textbox/textbox.component";
import {PublishConstant} from "../../../../core/constant/publish.constant";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AlertService} from "../../../../core/services/alert.service";
import {AlertStateEnum} from "../../../../core/enum/alertState.enum";
import {AlertEnum} from "../../../../core/enum/alert.enum";

@Component({
    selector: "app-employer",
    templateUrl: "employer.component.html",
    styleUrls: ["employer.component.scss"],
    standalone: true,
    imports: [
        DropdownComponent,
        ButtonComponent,
        TextboxComponent,
        ReactiveFormsModule
    ]
})
export class EmployerComponent implements OnInit {

    data: any;
    publish: Array<string> = [...PublishConstant];
    employerForm: FormGroup | any;

    constructor(
        private employerService: EmployersService,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService
    ){
        this.employerForm = new FormGroup({
            "name": new FormControl(null),
            "company": new FormControl(null),
            "desc": new FormControl(null),
            "publish": new FormControl(null)
        })
    }

    ngOnInit() {
        if(this.activatedRoute.snapshot.params["id"] !== "new"){
            this.employerService.GetEmployersCommentOne(this.activatedRoute.snapshot.params["id"]).subscribe({
                next: ((value: any) => {
                    this.employerForm.setValue({
                        name: value.name,
                        company: value.company,
                        desc: value.desc,
                        publish: value.publish ? 2 : 1
                    })
                })
            })
        }
    }

    OnSubmit(): void {
        const query = {
            ...this.employerForm.value,
            id: this.activatedRoute.snapshot.params["id"],
            publish: this.employerForm.value.publish == 2,
        }
        if(this.activatedRoute.snapshot.params["id"] == "new") this.OnCreate(query);
        else this.OnEdit(query);
    }

    OnEdit(query: object): void {
        this.employerService.ModifyEmployersComment(query).subscribe({
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
        });
    }

    OnCreate(query: object): void {
        this.employerService.CreateEmployersComment(query).subscribe({
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
        });
    }
}
