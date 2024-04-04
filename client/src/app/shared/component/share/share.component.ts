import {Component, EventEmitter, Input, Output} from "@angular/core";
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

    @Input() title: string;
    @Input() url: string;
    @Output() outout: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    CopyOnClipboard(): void {
        navigator.clipboard.writeText(this.url);
    }

    CloseDialog(): void {
        this.outout.emit();
    }
}
