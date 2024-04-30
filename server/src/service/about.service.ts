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

    async GetPersonalInfo(): Promise<any> {
        return await this.aboutModel.findOne(
            null,
            {
                jobtitle: 1,
                aboutme: 1,
                phone: 1,
                email: 1,
                birthday: 1,
                married: 1,
                militaryservice: 1
            }
        ).exec();
    }

    async ModifyPersonalInfo(body: any): Promise<any> {
        return await this.aboutModel
            .updateOne(
            { _id: 1 },
                {
                    jobtitle: body.jobtitle,
                    aboutme: body.aboutme,
                    phone: body.phone,
                    email: body.email,
                    birthday: body.birthday,
                    married: body.married,
                    militaryservice: body.militaryservice
                }
            )
            .exec();
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