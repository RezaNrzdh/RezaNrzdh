import {Component, EventEmitter, Output} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IconComponent } from "../icon/icon.component";
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-sidebar',
    templateUrl: "sidebar.component.html",
    styleUrls: ["sidebar.component.scss"],
    standalone: true,
    imports: [NgClass, IconComponent, RouterLink, RouterLinkActive]
})
export class SidebarComponent {

    @Output() toggle = new EventEmitter<boolean>();
    isVisible: boolean = true;

    constructor() {}

    OnToggle(): void {
        this.isVisible = false;
        const timeout = setTimeout(() => {
            this.toggle.emit(false);
            clearTimeout(timeout);
        }, 250);
    }
}
