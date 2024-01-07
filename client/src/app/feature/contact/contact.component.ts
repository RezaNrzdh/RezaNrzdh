import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ContactService} from "../../core/services/contact.service";
import {AboutModel} from "../../core/models/about.model";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    data: AboutModel = new AboutModel();
    contactForm: FormGroup;

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
        this.contactForm = new FormGroup({
            "name": new FormControl("null"),
            "email": new FormControl("null"),
            "phone": new FormControl("null"),
            "subject": new FormControl("null"),
            "comment": new FormControl("null"),
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

    GetContactFormData() {
        this.contactService.CreateComment(this.contactForm.value).subscribe({
            next: ((value: any) => {
                console.log(value);
            }),
            error: ((error: any) => {
                console.log(error);
            })
        });
    }
}
