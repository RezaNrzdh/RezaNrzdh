import {Component, OnInit} from "@angular/core";
import {UserService} from "../../../../core/services/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../../../core/models/user.model";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RoleConstant} from "../../../../core/constant/role.constant";
import {UserStateConstant} from "../../../../core/constant/user-state.constant";
import { CalendarPipe } from "../../../../shared/pipe/calendar.pipe";
import { DropdownComponent } from "../../../../shared/component/dropdown/dropdown.component";
import { ButtonComponent } from "../../../../shared/component/button/button.component";
import { TextboxComponent } from "../../../../shared/component/textbox/textbox.component";
import {AlertService} from "../../../../core/services/alert.service";
import {AlertStateEnum} from "../../../../core/enum/alertState.enum";
import {AlertEnum} from "../../../../core/enum/alert.enum";

@Component({
    selector: "admin-user",
    templateUrl: "user.component.html",
    styleUrls: ["user.component.scss"],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TextboxComponent, ButtonComponent, DropdownComponent, CalendarPipe]
})
export class UserComponent implements OnInit {

    username: string;
    data: UserModel;
    role: Array<string> = [...RoleConstant];
    userState: Array<string> = [...UserStateConstant];
    userForm: FormGroup | any;

    attempt: number;
    available: number;
    registerDate: number;
    id: any;

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private alertService: AlertService) {
        this.userForm = new FormGroup({
            "email": new FormControl(null),
            "name": new FormControl(null),
            "phone": new FormControl(null),
            "role": new FormControl(null),
            "available": new FormControl(false),
        });
    }

    ngOnInit() {
        this.username = this.activatedRoute.snapshot.params["username"];
        this.userService.GetUser(this.username).subscribe({
            next: ((value: any) => {
                this.userForm.patchValue({
                    email: value.email,
                    name: value.name,
                    phone: value.phone,
                    role: value.role,
                    available: value.available ? 2 : 1
                });
                this.id = value._id;
                this.attempt = value.attempt;
                this.registerDate = value.registerDate;
            })
        })
    }

    OnSubmit(): void {
        const form = {
            _id: this.id,
            ...this.userForm.value,
            available: this.userForm.value.available == 2
        }
        this.userService.ModifyUser(form).subscribe({
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
