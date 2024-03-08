import {Component, OnInit} from "@angular/core";
import {ContactService} from "../../../core/services/contact.service";

@Component({
    selector: "admin-contact-list",
    templateUrl: "contact-list.component.html",
    styleUrls: ["contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {

    data: any;

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.GetAllContacts().subscribe({
            next: ((contacts: any) => {
                this.data = contacts;
            })
        })
    }
}