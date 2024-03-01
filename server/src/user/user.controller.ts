import {Controller, Get} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller("api/v1/users")
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    GetAllUsers(): any {
        return this.userService.GetAllUsers();
    }
}