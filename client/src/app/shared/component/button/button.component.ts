import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-button",
    templateUrl: "button.component.html",
    styleUrls: ["button.component.scss"]
})
export class ButtonComponent implements OnInit {
    @Input() mode: "filled" | "outlined" | "ghost" | "submit";
    @Input() action: "submit" | "button" | "reset";
    @Input() color: "primary" | "secondary" | "success" | "danger" | "info";
    @Input() click: any;
    @Input() disabled: any = "";

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onClick = () => {
        this.router.navigate([this.click])
    }
}