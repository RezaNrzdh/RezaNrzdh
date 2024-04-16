import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {IconComponent} from "../../icon/icon.component";
import {TextboxComponent} from "../../textbox/textbox.component";
import {ButtonComponent} from "../../button/button.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {UserService} from "../../../../core/services/user.service";

@Component({
    selector: "app-profile-name",
    templateUrl: "profile-name.component.html",
    styleUrls: ["profile-name.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        TextboxComponent,
        ButtonComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ProfileNameComponent implements OnInit {

    @Input() name: string;
    @Input() email: string;
    @Output() back: EventEmitter<any> = new EventEmitter<any>();
    @Output() outName: EventEmitter<any> = new EventEmitter<any>();

    formGroup: FormGroup | any;

    constructor(private userService: UserService) {
        this.formGroup = new FormGroup({
            "name": new FormControl(null)
        });
    }

    ngOnInit() {
        setTimeout(() => {
            this.formGroup.patchValue({
                name: this.name
            });
        },10);
    }

    OnSubmit(): void {
        const body = {
            email: this.email,
            body: {
                name: this.formGroup.value.name
            }
        }
        this.userService.ModifyProfile(body).subscribe({
            next: ((value: any) => {
                if(value.acknowledged){
                    this.outName.emit({ name: this.formGroup.value.name });
                    this.SetCurrentTab();
                }
            })
        })
    }

    SetCurrentTab(): void {
        this.back.emit(0)
    }
}
