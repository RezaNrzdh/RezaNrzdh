import {Component, Input, OnInit} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Component({
    selector: "app-icon",
    templateUrl: "icon.component.html",
    styleUrls: ["icon.component.scss"]
})
export class IconComponent implements OnInit {

    constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

    @Input() icon: string;
    @Input() size: "16" | "20" | "24" | "32" = "24";
    @Input() color: "primary" | "secondary" | "success" | "danger" | "info" | "gray1" | "gray2" | "gray3" | "white" | "textTint";

    ngOnInit() {
        this.matIconRegistry.addSvgIcon(
            this.icon,
            this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${ this.icon }.svg`)
        );
    }

}
