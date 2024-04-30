import {Component, OnInit} from "@angular/core";
import {AboutService} from "../../../core/services/about.service";
import {ButtonComponent} from "../../../shared/component/button/button.component";
import {TextboxComponent} from "../../../shared/component/textbox/textbox.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: "admin-about",
    templateUrl: "about.component.html",
    styleUrls: ["about.component.scss"],
    standalone: true,
    imports: [
        ButtonComponent,
        TextboxComponent,
        ReactiveFormsModule
    ]
})
export class AboutComponent implements OnInit {

    data: any;
    aboutForm: FormGroup | any;

    constructor(private aboutService: AboutService) {
        this.aboutForm = new FormGroup({
            "email": new FormControl(null),
            "jobtitle": new FormControl(null),
            "phone": new FormControl(null),
            "birthday": new FormControl(null),
            "married": new FormControl(null),
            "militaryservice": new FormControl(null),
            "aboutme": new FormControl(null)
        })
    }

    ngOnInit() {
        this.aboutService.GetPersonalInfo().subscribe({
            next: ((value: any) => {
                console.log(value);
                this.aboutForm.patchValue({
                    email: value.email,
                    jobtitle: value.jobtitle,
                    phone: value.phone,
                    birthday: value.birthday,
                    married: value.married,
                    militaryservice: value.militaryservice,
                    aboutme: value.aboutme
                })
                this.data = value;
            })
        });
    }

    OnSubmit(): void {
        this.aboutService.ModifyPersonalInfo(this.aboutForm.value).subscribe({
            next: ((value: any) => {
                console.log(value);
            })
        })
    }
}
