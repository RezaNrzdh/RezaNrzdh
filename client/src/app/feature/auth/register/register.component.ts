import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import { Router, RouterLink } from "@angular/router";
import {Title} from "@angular/platform-browser";
import { IconComponent } from '../../../shared/component/icon/icon.component';
import { CheckboxComponent } from '../../../shared/component/checkbox/checkbox.component';
import { ButtonComponent } from '../../../shared/component/button/button.component';
import { TextboxComponent } from '../../../shared/component/textbox/textbox.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [RouterLink, FormsModule, ReactiveFormsModule, TextboxComponent, ButtonComponent, CheckboxComponent, IconComponent]
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup | any;

    constructor(private authService: AuthService, private router: Router, private titleService: Title) {
        this.titleService.setTitle("RezaNrzdh - Register");
    }

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
                this.router.navigate(["/"]);
            }),
            error: ((err: any) => {
                console.log(err);
            })
        });
    }
}
