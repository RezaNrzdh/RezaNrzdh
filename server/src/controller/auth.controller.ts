import {Body, Controller, Get, Patch, Post, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import {AuthService} from "../service/auth.service";
import {constants} from "../constant";

@Controller("v1/auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    async SignUp(@Body() body: object, @Res({passthrough: true}) res: Response): Promise<any> {
        const value = await this.authService.SignUp(body);
        if(value){
            // prod mode secure true.
            //res.cookie("jwt", value, {httpOnly: true, secure: true, sameSite: true, maxAge: constants.expires * 1000});
            res.cookie("jwt", value, {httpOnly: true, sameSite: true, maxAge: constants.expires * 1000});
            return true;
        }
        else{
            return false;
        }
    }

    @Post("signin")
    async SignIn(@Body() body: object, @Res({passthrough: true}) res: Response): Promise<any> {
        const value = await this.authService.SignIn(body);
        if (!value) return false;

        // prod mode secure true.
        //res.cookie("jwt", value, {httpOnly: true, secure: true, sameSite: true, maxAge: constants.expires * 1000});
        res.cookie("jwt", value, {httpOnly: true, sameSite: true, maxAge: constants.expires * 1000});
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

    @Patch("modifyPassword")
    ModifyPassword(@Body() body): any {
        return this.authService.ModifyPassword(body);
    }
}