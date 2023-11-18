import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor() { }

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
        console.log(this.contactForm.value);
    }
}
