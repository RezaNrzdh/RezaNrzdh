import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import { Router, RouterLink } from "@angular/router";
import {Title} from "@angular/platform-browser";
import { IconComponent } from '../../../shared/component/icon/icon.component';
import { ButtonComponent } from '../../../shared/component/button/button.component';
import { TextboxComponent } from '../../../shared/component/textbox/textbox.component';
import { AlertboxComponent } from '../../../shared/component/alertbox/alertbox.component';
import { NgIf } from '@angular/common';
import {AlertService} from "../../../core/services/alert.service";
import {AlertStateEnum} from "../../../core/enum/alertState.enum";
import {AlertEnum} from "../../../core/enum/alert.enum";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        AlertboxComponent,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
        TextboxComponent,
        ButtonComponent,
        IconComponent
    ]
})
export class LoginComponent implements OnInit {

    isSpin: boolean = false;
    alertbox: {type: string, msg: string};
    loginForm: FormGroup | any;

    constructor(private authService: AuthService, private router: Router, private titleService: Title, private alertService: AlertService) {
        this.titleService.setTitle("RezaNrzdh - Login");
    }

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
                this.isSpin = false;
                if(value){
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.SUCCESS, msg: AlertEnum.successLogin});
                    this.router.navigate(["/"]);
                }
                else {
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.DANGER, msg: AlertEnum.errorLogin});
                }
            }),
            error: (() => {
                this.isSpin = false;
                this.alertService.SetIsHide(false);
                this.alertService.SetAlertInfo({type: AlertStateEnum.DANGER, msg: AlertEnum.errorLogin});
            })
        });
    }
}
