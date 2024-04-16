import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {TextboxComponent} from "../../textbox/textbox.component";
import {ButtonComponent} from "../../button/button.component";
import {IconComponent} from "../../icon/icon.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../../../core/services/user.service";

@Component({
    selector: "app-profile-phone",
    templateUrl: "profile-phone.component.html",
    styleUrls: ["profile-phone.component.scss"],
    standalone: true,
    imports: [
        TextboxComponent,
        ButtonComponent,
        IconComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ProfilePhoneComponent implements OnInit {

    @Input() phone: number;
    @Input() email: string;
    @Output() back: EventEmitter<any> = new EventEmitter<any>();
    @Output() outPhone: EventEmitter<any> = new EventEmitter<any>();

    formGroup: FormGroup | any;

    constructor(private userService: UserService) {
        this.formGroup = new FormGroup({
            "phone": new FormControl(null)
        });
    }

    ngOnInit() {
        setTimeout(() => {
            this.formGroup.patchValue({
                phone: this.phone
            });
        },10);
    }

    OnSubmit(): void {
        const body = {
            email: this.email,
            body: {
                phone: this.formGroup.value.phone
            }
        }
        this.userService.ModifyProfile(body).subscribe({
            next: ((value: any) => {
                if(value.acknowledged){
                    this.outPhone.emit({ phone: this.formGroup.value.phone });
                    this.SetCurrentTab();
                }
            })
        })
    }

    SetCurrentTab(): void {
        this.back.emit(0)
    }
}
