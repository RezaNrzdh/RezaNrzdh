import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IconComponent} from "../../icon/icon.component";
import {TextboxComponent} from "../../textbox/textbox.component";
import {ButtonComponent} from "../../button/button.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
    selector: "app-profile-pass",
    templateUrl: "profile-pass.component.html",
    styleUrls: ["profile-pass.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        TextboxComponent,
        ButtonComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ProfilePasswordComponent {

    @Input() email: string;
    @Output() back: EventEmitter<any> = new EventEmitter<any>();

    formGroup: FormGroup | any;

    constructor(private authService: AuthService) {
        this.formGroup = new FormGroup({
            "pass1": new FormControl(null, [Validators.required]),
            "pass2": new FormControl(null, [Validators.required])
        });
    }

    OnSubmit(): void {
        if(this.formGroup.status === "INVALID") return;

        if(this.formGroup.value.pass1 !== this.formGroup.value.pass2){
            console.log("Wrong");
            return;
        }

        const body = {
            email: this.email,
            body: {
                password: this.formGroup.value.pass1
            }
        }
        this.authService.ModifyPassword(body).subscribe({
            next: ((value: any) => {
                if(value.acknowledged){
                    this.SetCurrentTab();
                }
            })
        });
    }

    SetCurrentTab(): void {
        this.back.emit(0)
    }
}
