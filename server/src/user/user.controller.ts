import {Controller, Get, Param} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller("api/v1/user")
export class UserController {
    constructor(private userService: UserService) {}

    @Get("all")
    GetAllUsers(): any {
        return this.userService.GetAllUsers();
    }

    @Get(":username")
    GetUser(@Param("username") username): any {
        return this.userService.GetUser(username);
    }
}