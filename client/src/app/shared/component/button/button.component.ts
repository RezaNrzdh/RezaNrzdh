import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { RouterLink } from "@angular/router";
import { NgIf, NgClass, NgTemplateOutlet } from "@angular/common";

@Component({
    selector: "app-button",
    templateUrl: "button.component.html",
    styleUrls: ["button.component.scss"],
    standalone: true,
    imports: [NgIf, NgClass, NgTemplateOutlet, RouterLink, IconComponent]
})
export class ButtonComponent implements OnInit {

    @Input() mode: "filled" | "outlined" | "ghost" | "submit" = 'filled';
    @Input() action: "submit" | "button" | "reset";
    @Input() color: "primary" | "secondary" | "dark" | "white" | "dark2" = 'primary';
    @Input() size: "small" | "medium" = "medium";
    @Input() isLink: true | false = false;
    @Input() icon?: string;
    @Input() href?: string;
    @Input() disabled: any = "";
    @Input() spin: boolean = false;

    constructor() {}

    ngOnInit() {
    }
}
