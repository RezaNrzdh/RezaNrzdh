import {Component, OnInit} from "@angular/core";
import {IconComponent} from "../icon/icon.component";
import {NewsletterService} from "../../../core/services/newsletter.service";
import {FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: "app-newsletter",
    templateUrl: "newsletter.component.html",
    styleUrls: ["newsletter.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class NewsletterComponent implements OnInit {

    newsletterInput: string = "";
    newsletterForm: FormGroup | any;

    constructor(private newsletterService: NewsletterService) {
        this.newsletterForm = new FormGroup({
            "email": new FormControl(null, [Validators.required, Validators.email])
        });
    }

    ngOnInit(): void {
    }

    SubmitNewsletter(): void {
        if(this.newsletterForm.status === "INVALID") return;
        this.newsletterService.CreateNewsletter(this.newsletterForm.value).subscribe({
            next: ((value) => {
                this.newsletterInput = "";
            })
        })
    }
}
