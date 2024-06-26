import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {constants} from "../constant";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Auth} from "../schema/auth.schema";
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

    async SignIn(body: any): Promise<any> {
        const user = await this.authModel.findOne({email: body.email});
        if (!user) return;

        const compare = await bcrypt.compare(body.password, user.password.toString());
        if (!compare) {
            await this.authModel.updateOne({email: { $regex: body.email}}, { $inc: { attempt: 1 } });
            return;
        }

        const payload = { uid: user._id, email: user.email, role: user.role };
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

    async ModifyPassword(body: any): Promise<any> {
        const pass = await bcrypt.hash(body.body.password, 12);
        return this.authModel
            .updateOne(
                { email: body.email },
                {
                    $set: {
                        password: pass
                    }
                }
            )
            .exec();
    }
}