import {Component, Input, OnInit} from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-tag',
    templateUrl: 'tag.component.html',
    styleUrls: ['tag.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class TagComponent implements OnInit {

    @Input() color: "primary" | "secondary" | "success" | "danger" = "secondary";

    constructor() {
    }

    ngOnInit() {
    }
}
