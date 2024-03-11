import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import {AuthService} from "./auth.service";
import {constants} from "../constant";

@Controller("api/v1/auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    async SignUp(@Body() body: object, @Res({passthrough: true}) res: Response): Promise<any> {
        const value = await this.authService.SignUp(body);
        if(value){
            res.cookie("jwt", value, {httpOnly: true, secure: true, sameSite: true, maxAge: constants.expires * 1000})
        }
        else{
            return false;
        }
    }

    @Post("signin")
    async SignIn(@Body() body: object, @Res({passthrough: true}) res: Response): Promise<any> {
        const value = await this.authService.SignIn(body);
        if (!value) return false;

        console.log("its ok");
        res.cookie("jwt", value, {httpOnly: true, secure: true, sameSite: true, maxAge: constants.expires * 1000});
        return true;
    }

    @Get("verify")
    Verify(@Req() req: Request): any {
        if(!req.cookies.jwt) return false;

        const value = this.authService.Verify(req.cookies.jwt);

        if(value){ return value; }
        else { return false; }
    }

    @Get("signout")
    SignOut(@Res({passthrough: true}) res: Response): any {
        res.clearCookie("jwt");
        return false;
    }
}