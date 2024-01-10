import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {constants} from "../constant";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Auth} from "./auth.schema";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService, @InjectModel("Auth") private authModel: Model<Auth> ) {}

    async SignUp(body: any): Promise<any> {
        const obj = new this.authModel(body);

        obj.password = await bcrypt.hash(body.password, 12);

        return await obj.save(body).then((val) => {
            const payload = {
                uid: val._id,
                email: val.email,
                role: val.role
            };
            return this.jwtService.sign(payload);
        }).catch((err) =>{
            console.log(err);
        });
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