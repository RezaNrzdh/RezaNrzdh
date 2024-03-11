import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ContactService} from "../../core/services/contact.service";
import {AboutModel} from "../../core/models/about.model";
import {AlertboxModel} from "../../core/models/alertbox.model";
import {AlertEnum} from "../../core/enum/alert.enum";
import {Title} from "@angular/platform-browser";
import { IconComponent } from '../../shared/component/icon/icon.component';
import { ButtonComponent } from '../../shared/component/button/button.component';
import { TextboxComponent } from '../../shared/component/textbox/textbox.component';
import { AlertboxComponent } from '../../shared/component/alertbox/alertbox.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [NgIf, AlertboxComponent, FormsModule, ReactiveFormsModule, TextboxComponent, ButtonComponent, IconComponent]
})
export class ContactComponent implements OnInit {

    isSpin: boolean = false;
    isAlertboxActive: boolean = false;
    alertbox: AlertboxModel;
    data: AboutModel = new AboutModel();
    contactForm: FormGroup | any;

    constructor(private contactService: ContactService, private titleService: Title) {
        this.titleService.setTitle("RezaNrzdh - Contact Me");
    }

    ngOnInit(): void {
        this.contactForm = new FormGroup({
            "name": new FormControl(null, [Validators.required]),
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "phone": new FormControl(null, [Validators.required]),
            "subject": new FormControl(null, [Validators.required]),
            "comment": new FormControl(null, [Validators.required]),
        });

        this.contactService.GetInformation().subscribe({
            next: ((value: any) => {
                this.data = value[0];
            }),
            error:((err: any) => {
                console.log(err);
            })
        });
    }

    CreateComment(): void {
        if(this.contactForm.status === "INVALID" || this.isSpin){
            console.log(this.contactForm);
            return;
        }
        console.log(1);
        this.isSpin = true;

        this.contactService.CreateComment(this.contactForm.value).subscribe({
            next:((value: any) => {
                this.alertbox = {
                    type: "success",
                    msg: AlertEnum.successContactComment
                };
                this.isSpin = false;
                this.ActiveAlertBox(value, 3000);
            }),
            error:(() => {
                this.alertbox = {
                    type: "danger",
                    msg: AlertEnum.fatalError
                };
                this.isSpin = false;
            })
        })
    }

    ActiveAlertBox(value: any, time: number): void {
        this.isAlertboxActive = true;
        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            this.isAlertboxActive = false;
        },time);
    }


}
