import {Component, OnInit} from "@angular/core";
import {ContactService} from "../../../../core/services/contact.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "admin-contact",
    templateUrl: "contact.component.html",
    styleUrls: ["contact.component.scss"],
    standalone: true
})
export class ContactComponent implements OnInit {

    data: any;

    constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.GetContact(this.activatedRoute.snapshot.params["slug"]).subscribe({
            next: ((value: any) => {
                this.data = value;
            })
        })
    }
}
