import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IconComponent} from "../../icon/icon.component";
import {UserModel} from "../../../../core/models/user.model";

@Component({
    selector: "app-profile-main",
    templateUrl: "main-profile.component.html",
    styleUrls: ["main-profile.component.scss"],
    standalone: true,
    imports: [
        IconComponent
    ]
})
export class MainProfileComponent {

    @Input() data: UserModel = new UserModel();
    @Output() output: EventEmitter<any> = new EventEmitter<any>();

    SetCurrentTab(num: number): void {
        this.output.emit(num)
    }
}
