import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {About} from "../schema/about.schema";

@Injectable()
export class AboutService {

    constructor(@InjectModel("About") private aboutModel: Model<About>) {}

    async GetAboutMe(): Promise<any> {
        return await this.aboutModel.find().exec();
    }

    async GetSkills(): Promise<any> {
        return await this.aboutModel.findOne(null, { skills: 1}).exec();
    }

    async GetExperience(): Promise<any> {
        return await this.aboutModel.findOne(null, { experience: 1}).exec();
    }

    async GetLanguage(): Promise<any> {
        return await this.aboutModel.findOne(null, { language: 1}).exec();
    }
}