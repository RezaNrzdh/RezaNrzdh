import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup | any;

    constructor() { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "password": new FormControl(null, Validators.required)
        })
    }

    onSubmit = () => {
        console.log(this.loginForm.value);
    }

}
