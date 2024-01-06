import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {About} from "./about.schema";

@Injectable()
export class AboutService {

    constructor(@InjectModel("About") private aboutModel: Model<About>) {}

    async GetAboutMe(): Promise<any> {
        return await this.aboutModel.find().exec();
    }
}