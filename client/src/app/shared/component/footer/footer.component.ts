import {Component} from "@angular/core";
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { IconComponent } from "../icon/icon.component";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "app-footer",
    templateUrl: "footer.component.html",
    styleUrls: ["footer.component.scss"],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, IconComponent, NewsletterComponent]
})
export class FooterComponent {
}
