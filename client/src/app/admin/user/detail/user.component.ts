import {Component, OnInit} from "@angular/core";
import {UserService} from "../../../core/services/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../../core/models/user.model";
import {FormControl, FormGroup} from "@angular/forms";
import {RoleConstant} from "../../../core/constant/role.constant";

@Component({
    selector: "admin-user",
    templateUrl: "user.component.html",
    styleUrls: ["user.component.scss"]
})
export class UserComponent implements OnInit {

    username: string;
    data: UserModel;
    role: Array<string> = [...RoleConstant];
    userForm: FormGroup | any;

    attempt: number;
    available: number;
    registerDate: number;

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
        this.userForm = new FormGroup({
            "email": new FormControl(null),
            "name": new FormControl(null),
            "phone": new FormControl(null),
            "role": new FormControl(null)
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
                    role: value.role
                });
                this.attempt = value.attempt;
                this.available = 1;
                this.registerDate = value.registerDate;
            })
        })
    }

    OnSubmit(): void {
        console.log(this.userForm.value);
    }
}
