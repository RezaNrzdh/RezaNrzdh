import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "button.component.html",
    styleUrls: ["button.component.scss"]
})
export class ButtonComponent implements OnInit {

    @Input() mode: "filled" | "outlined" | "ghost" | "submit";
    @Input() action: "submit" | "button" | "reset";
    @Input() color: "primary" | "secondary" | "dark" | "white" | "dark2";
    @Input() isLink: true | false = false;
    @Input() icon?: string;
    @Input() href?: string;
    @Input() disabled: any = "";
    @Output() click: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {
    }

    onClick = () => {
        this.click.emit();
    }
}
