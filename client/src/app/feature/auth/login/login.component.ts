import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup | any;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "password": new FormControl(null, Validators.required)
        })
    }

    onSubmit = () => {
        this.authService.SignIn(this.loginForm.value).subscribe({
            next: ((value: any) => {
                console.log(document.cookie);
            }),
            error: ((error: any) => {
                console.log(error)
            })
        })
    }

}
