import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Component({
    selector: "app-icon",
    templateUrl: "icon.component.html",
    styleUrls: ["icon.component.scss"]
})
export class IconComponent implements OnInit {

    constructor(private matIconRegistery: MatIconRegistry, private sanitizer: DomSanitizer) {
        this.matIconRegistery.addSvgIcon(
            this.icon,
            this.sanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${ this.icon }.svg`)
        );
    }

    @Input() icon: string;
    @Input() size: 16 | 20 | 24 | 32 = 24;
    @Input() color: string;

    ngOnInit() {
        // this.httpClient.get(`assets/icons/${ this.icon }.svg`, { responseType: "text" }).subscribe({
        //     next: ((value: any) => {
        //         this.setIcon = this.sanitizer.bypassSecurityTrustHtml(value);
        //     })
        // });
    }

}
