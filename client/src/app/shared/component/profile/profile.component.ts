import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {IconComponent} from "../icon/icon.component";
import {ButtonComponent} from "../button/button.component";
import {NgClass, NgIf} from "@angular/common";
import {MainProfileComponent} from "./main/main-profile.component";
import {ProfileNameComponent} from "./name/profile-name.component";
import {ProfilePhoneComponent} from "./phone/profile-phone.component";
import {ProfilePasswordComponent} from "./password/profile-pass.component";
import {UserService} from "../../../core/services/user.service";
import {UserModel} from "../../../core/models/user.model";



@Component({
    selector: "app-profile",
    templateUrl: "profile.component.html",
    styleUrls: ["profile.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        ButtonComponent,
        NgIf,
        NgClass,
        MainProfileComponent,
        ProfileNameComponent,
        ProfilePhoneComponent,
        ProfilePasswordComponent,
        MainProfileComponent
    ]
})
export class ProfileComponent implements OnInit {

    @Output() output: EventEmitter<any> = new EventEmitter<any>();

    data: UserModel = new UserModel();
    isHide: boolean = false;
    tabs: number = 0;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.GetProfile();
    }

    GetProfile(): void {
        this.userService.userInfo.subscribe({
            next:((value: any) => {
                this.userService.GetProfile(value.email).subscribe({
                    next:((value: any) => {
                        this.data = value;
                    })
                })
            })
        })
    }

    SetCurrentTab(num: number): void {
        this.tabs = num;
    }

    SetDataChanged(data: any): void {
        this.data = { ...this.data, ...data }
    }

    CloseDialog(): void {
        this.output.emit();
    }
}
