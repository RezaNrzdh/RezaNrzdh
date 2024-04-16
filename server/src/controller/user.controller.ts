import {Body, Controller, Get, Param, Patch, UseGuards} from "@nestjs/common";
import {UserService} from "../service/user.service";
import {AuthGuard} from "../guard/auth.guard";

@Controller("api/v1/user")
export class UserController {
    constructor(private userService: UserService) {}

    @Get("all")
    @UseGuards(AuthGuard)
    GetAllUsers(): any {
        return this.userService.GetAllUsers();
    }

    @Get(":username")
    @UseGuards(AuthGuard)
    GetUser(@Param("username") username): any {
        return this.userService.GetUser(username);
    }

    @Get("profile/:username")
    GetProfile(@Param("username") username): any {
        return this.userService.GetProfile(username);
    }

    @Patch("profile")
    ModifyProfile(@Body() body: object): any {
        return this.userService.ModifyProfile(body);
    }


    @Patch()
    @UseGuards(AuthGuard)
    ModifyUser(@Body() body: object): any {
        return this.userService.ModifyUser(body);
    }
}