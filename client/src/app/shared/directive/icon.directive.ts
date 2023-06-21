import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Directive({
    selector: '[appIcon]'
})
export class IconDirective implements OnInit {

    constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

    @Input("appIcon") icon: string;
    @Input() size: 16 | 20 | 24 | 32 = 24;
    @Input() color: string;

    @HostBinding("innerHTML") setIcon: any;
    @HostBinding("svg.fill") setColor: any;

    ngOnInit() {
        this.httpClient.get(`assets/icons/${this.icon}.svg`, { responseType: "text" }).subscribe({
            next: ((value: any) => {
                this.setIcon = this.sanitizer.bypassSecurityTrustHtml(value);
                this.setColor = this.color;
            })
        })
    }

}
