import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup | any;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.registerForm = new FormGroup({
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "password": new FormControl(null, Validators.required),
            "checkbox": new FormControl(null, Validators.requiredTrue)
        })
    }

    onSubmit = () => {
        console.log(this.registerForm.value);
        this.authService.SignUp(this.registerForm.value).subscribe({
            next: ((value: any) => {
                console.log(value);
            }),
            error: ((err: any) => {
                console.log(err);
            })
        });
    }
}
