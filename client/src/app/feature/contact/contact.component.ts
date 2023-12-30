import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ContactService} from "../../core/services/contact.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor(private contactService: ContactService) { }

    contactForm: FormGroup;

    ngOnInit(): void {
        this.contactForm = new FormGroup({
            "name": new FormControl("null"),
            "email": new FormControl("null"),
            "phone": new FormControl("null"),
            "subject": new FormControl("null"),
            "comment": new FormControl("null"),
        })
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
