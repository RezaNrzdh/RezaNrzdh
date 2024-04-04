import {Component, EventEmitter, Output} from "@angular/core";
import {ButtonComponent} from "../button/button.component";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: "app-guest",
    templateUrl: "guest.component.html",
    styleUrls: ["guest.component.scss"],
    standalone: true,
    imports: [
        ButtonComponent,
        RouterLink
    ]
})
export class GuestComponent {

    @Output() output: EventEmitter<any> = new EventEmitter<any>();

    constructor(private router: Router){}

    RedirectToLoginPage(): void {
        //
    }

    CloseDialog(): void {
        this.output.emit();
    }
}