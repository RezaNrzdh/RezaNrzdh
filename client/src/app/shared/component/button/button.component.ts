import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-button",
    templateUrl: "button.component.html",
    styleUrls: ["button.component.scss"]
})
export class ButtonComponent implements OnInit {
    @Input() type: "filled" | "outlined" | "ghost";
    @Input() color: "primary" | "secondary" | "success" | "danger" | "info";
    @Input() click: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onClick = () => {
        this.router.navigate([this.click])
    }
}