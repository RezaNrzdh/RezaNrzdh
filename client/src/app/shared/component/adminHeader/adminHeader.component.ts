import {Component, OnInit} from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "admin-header",
    templateUrl: "./adminHeader.component.html",
    styleUrls: ["./adminHeader.component.scss"],
    standalone: true,
    imports: [RouterLink]
})
export class AdminHeaderComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }

}
