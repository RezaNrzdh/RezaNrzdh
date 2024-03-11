import {Component, OnInit} from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "admin-side",
    templateUrl: "adminSide.component.html",
    styleUrls: ["adminSide.component.scss"],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, IconComponent]
})
export class AdminSideComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }
}