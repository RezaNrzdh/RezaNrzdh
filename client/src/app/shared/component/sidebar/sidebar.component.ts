import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'app-sidebar',
    templateUrl: "sidebar.component.html",
    styleUrls: ["sidebar.component.scss"]
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
