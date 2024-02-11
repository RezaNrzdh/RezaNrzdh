import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "button.component.html",
    styleUrls: ["button.component.scss"]
})
export class ButtonComponent implements OnInit {

    @Input() mode: "filled" | "outlined" | "ghost" | "submit" = 'filled';
    @Input() action: "submit" | "button" | "reset";
    @Input() color: "primary" | "secondary" | "dark" | "white" | "dark2" = 'primary';
    @Input() isLink: true | false = false;
    @Input() icon?: string;
    @Input() href?: string;
    @Input() disabled: any = "";
    @Input() spin: boolean = false;

    constructor() {}

    ngOnInit() {
    }
}
