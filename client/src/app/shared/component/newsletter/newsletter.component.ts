import {Component, OnInit} from "@angular/core";
import {IconComponent} from "../icon/icon.component";
import {NewsletterService} from "../../../core/services/newsletter.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: "app-newsletter",
    templateUrl: "newsletter.component.html",
    styleUrls: ["newsletter.component.scss"],
    imports: [
        IconComponent,
        FormsModule
    ],
    standalone: true
})
export class NewsletterComponent implements OnInit {

    newsletterInput: string = "";

    constructor(private newsletterService: NewsletterService) {}

    ngOnInit(): void {
    }

    SubmitNewsletter(): void {
        if(this.newsletterInput == "") return;
        this.newsletterService.CreateNewsletter({email: this.newsletterInput}).subscribe({
            next: ((value) => {
                this.newsletterInput = "";
            })
        })
    }
}
