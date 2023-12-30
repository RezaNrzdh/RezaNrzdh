import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

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
        return this.jwtService.verify(token, {secret: "rytsdkahdewruweif"});
    }

    SignOut(): any {

    }
}