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
            "password": new FormControl(null, [Validators.required, Validators.minLength(6)]),
            "checkbox": new FormControl(false, Validators.requiredTrue)
        })
    }

    onSubmit = () => {
        if(this.registerForm.status === "INVALID") return;

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
