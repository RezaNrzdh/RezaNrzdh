import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): any {
        try{
            const token = context.switchToHttp().getRequest().cookies.jwt;
            const value = this.jwtService.verify(token);

            if(value.role == 2) return true;
            else return false;
        }
        catch(err){
            return false
        }
    }
}