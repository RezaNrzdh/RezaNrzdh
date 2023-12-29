import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {
    }

    SignUp(): any {

    }

    async SignIn(): Promise<string> {
        const payload = { uid: 1, name: 'johndoe@mail.com', role: 'user' };
        return this.jwtService.sign(payload);
    }

    VerifyJWT(): any {

    }

    SignOut(): any {

    }
}