import {Component, OnInit} from "@angular/core";
import {IconComponent} from "../../../../shared/component/icon/icon.component";
import {RouterLink} from "@angular/router";
import {CanvasComponent} from "../canvas/canvas.component";

@Component({
    selector: "app-information",
    templateUrl: "information.component.html",
    styleUrls: ["information.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        RouterLink,
        CanvasComponent
    ]
})
export class InformationComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
