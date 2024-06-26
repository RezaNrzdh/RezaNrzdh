import {Component, Input, OnInit} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import { MatIconRegistry, MatIconModule } from "@angular/material/icon";

@Component({
    selector: "app-icon",
    templateUrl: "icon.component.html",
    styleUrls: ["icon.component.scss"],
    standalone: true,
    imports: [MatIconModule]
})
export class IconComponent implements OnInit {

    constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

    @Input() icon: string;
    @Input() size: "16" | "20" | "24" | "32" | "48" | "72" = "24";
    @Input() color: any;

    ngOnInit() {
        this.matIconRegistry.addSvgIcon(
            this.icon,
            this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${ this.icon }.svg`)
        );
    }

}
