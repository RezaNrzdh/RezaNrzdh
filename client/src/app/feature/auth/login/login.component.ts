import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {AlertEnum} from "../../../core/enum/alert.enum";

interface AlertboxInterface {
    type: string;
    msg: string;
}


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isSpin: boolean = false;
    isAlertboxActive: boolean = false;
    alertbox: {type: string, msg: string};
    loginForm: FormGroup | any;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "password": new FormControl(null, [Validators.required, Validators.minLength(6)])
        })
    }

    onSubmit = () => {
        if(this.loginForm.status === "INVALID" || this.isSpin) return;
        this.isSpin = true;

        this.authService.SignIn(this.loginForm.value).subscribe({
            next: ((value: any) => {
                if(value) this.alertbox = { type: "success", msg: AlertEnum.successLogin };
                else this.alertbox = { type: "danger", msg: AlertEnum.errorLogin };

                this.isSpin = false;
                this.ActiveAlertBox();
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });
    }

    ActiveAlertBox(): any {
        this.isAlertboxActive = true;
        const timeout = setTimeout(() => {
            this.isAlertboxActive = false;
            clearTimeout(timeout);
        },5000);
    }
}
