import {Component, OnInit} from "@angular/core";
import {ContactService} from "../../../core/services/contact.service";
import { CalendarPipe } from "../../../shared/pipe/calendar.pipe";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { RouterLink } from "@angular/router";
import { NgFor } from "@angular/common";

@Component({
    selector: "admin-contact-list",
    templateUrl: "contact-list.component.html",
    styleUrls: ["contact-list.component.scss"],
    standalone: true,
    imports: [NgFor, RouterLink, IconComponent, CalendarPipe]
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