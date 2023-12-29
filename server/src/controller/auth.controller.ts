import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import {AuthService} from "../service/auth.service";

@Controller("api/v1/auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    SignUp(@Body() body: object, @Req() req: Request): object {
        return body;
    }

    @Post("signin")
    SignIn(@Body() body: object, @Res({passthrough: true}) res: Response): any {
        this.authService.SignIn().then((value) => {
            res.cookie("jwt", value, {httpOnly: true});
        });
    }

    @Get("verify")
    VerifyJWT(): any {
        return true;
    }

    @Get("signout")
    SignOut(): any {
        return true;
    }
}