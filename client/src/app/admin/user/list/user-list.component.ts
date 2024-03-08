import {Component, OnInit} from "@angular/core";
import {UserService} from "../../../core/services/user.service";

@Component({
    selector: "admin-user-list",
    templateUrl: "user-list.component.html",
    styleUrls: ["user-list.component.scss"]
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