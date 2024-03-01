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
}