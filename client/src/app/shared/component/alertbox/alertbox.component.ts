import {Component, EventEmitter, Input, Output} from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
    selector: "app-alertbox",
    templateUrl: "alertbox.component.html",
    styleUrls: ["alertbox.component.scss"],
    standalone: true,
    imports: [NgClass]
})
export class AlertboxComponent{
    @Input() msg: string;
    @Input() type: string = "success";
    @Input() time: number = 3;
    @Input() location: "TopCenter" | "BotCenter" | "BotLeft" | "BotRight" | "TopLeft" | "TopRight" = "TopCenter";
    @Output() output = new EventEmitter<any>();

    constructor() {
        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            this.output.emit(false);
        },this.time * 1000);
    }
}
