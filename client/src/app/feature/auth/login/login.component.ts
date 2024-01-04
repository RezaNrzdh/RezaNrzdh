import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup | any;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "password": new FormControl(null, Validators.required)
        })
    }

    onSubmit = () => {
        if(this.loginForm.status === "INVALID") return;

        this.authService.SignIn(this.loginForm.value).subscribe({
            next: ((value: any) => {
                this.router.navigate(["/"]);
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });

    }

}
