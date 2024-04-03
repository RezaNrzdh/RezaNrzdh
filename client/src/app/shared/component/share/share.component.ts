import {Component, Input} from "@angular/core";
import {IconComponent} from "../icon/icon.component";
import {ButtonComponent} from "../button/button.component";

@Component({
    selector: "app-share",
    templateUrl: "share.component.html",
    styleUrls: ["share.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        ButtonComponent
    ]
})
export class ShareComponent {

    @Input() value: string = "http://rezanrzdh.ir/";

    constructor() {}

    CopyOnClipboard(): void {
        navigator.clipboard.writeText(this.value);
    }
}
