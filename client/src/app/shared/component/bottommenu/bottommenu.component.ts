import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {IconComponent} from "../icon/icon.component";

@Component({
    selector: "app-menu",
    templateUrl: "bottommenu.component.html",
    styleUrls: ["bottommenu.component.scss"],
    standalone: true,
    imports: [
        RouterLink,
        IconComponent
    ]
})
export class BottommenuComponent {

    constructor() {
    }
}
