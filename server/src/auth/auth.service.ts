import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {constants} from "../constant";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {
    }

    SignUp(): any {

    }

    async SignIn(): Promise<any> {
        const payload = { uid: 1, name: 'johndoe@mail.com', role: 'user' };
        return this.jwtService.sign(payload);
    }

    Verify(token: string){
        try{
            return this.jwtService.verify(token, {secret: constants.secret});
        }
        catch (error) {
            return false;
        }
    }

    SignOut(): any {

    }
}