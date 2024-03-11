import {Component, OnInit} from "@angular/core";
import {UserService} from "../../../core/services/user.service";
import { RolePipe } from "../../../shared/pipe/role.pipe";
import { CalendarPipe } from "../../../shared/pipe/calendar.pipe";
import { RouterLink } from "@angular/router";
import { TagComponent } from "../../../shared/component/tag/tag.component";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { NgFor, NgIf } from "@angular/common";

@Component({
    selector: "admin-user-list",
    templateUrl: "user-list.component.html",
    styleUrls: ["user-list.component.scss"],
    standalone: true,
    imports: [NgFor, IconComponent, NgIf, TagComponent, RouterLink, CalendarPipe, RolePipe]
})
export class UserListComponent implements OnInit {

    data: Array<any>;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.GetAllUsers().subscribe({
            next: ((users: any) => {
                this.data = users;
            })
        })
    }

}