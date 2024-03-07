import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./user.schema";

@Injectable()
export class UserService {

    constructor(@InjectModel("User") private userModel: Model<User>) {}

    async GetAllUsers(): Promise<any> {
        return this.userModel.find().exec();
    }

    async GetUser(username: string): Promise<any> {
        return await this.userModel
            .findOne(
                { email: username },
                {_id: 1, attempt: 1, email: 1, name: 1, phone: 1, registerDate: 1, available: 1, role: 1}
            )
            .exec();
    }

    async ModifyUser(body: any): Promise<any> {
        console.log(body);
        return this.userModel
            .updateOne(
                {
                    _id: body._id
                },
                {
                    $set: {
                        email: body.email,
                        name: body.name,
                        role: body.role,
                        phone: body.phone,
                        available: body.available
                    }
                }
            )
            .exec();
    }
}