import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import {AuthService} from "../service/auth.service";
import {constants} from "../constant";

@Controller("api/v1/auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    SignUp(@Body() body: object, @Req() req: Request): object {
        return body;
    }

    @Post("signin")
    async SignIn(@Body() body: object, @Res({passthrough: true}) res: Response): Promise<any> {
        const value = await this.authService.SignIn();
        res.cookie("jwt", value, {httpOnly: true, secure: true, sameSite: true, maxAge: constants.expires * 1000});
    }

    @Get("verify")
    Verify(@Req() req: Request): any {
        if(!req.cookies.jwt) return false;

        const value = this.authService.Verify(req.cookies.jwt);

        if(value){ return value; }
        else { return false; }
    }

    @Get("signout")
    SignOut(): any {
        return true;
    }
}