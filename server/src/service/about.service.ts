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

    async GetExperienceOne(id: any): Promise<any> {
        return await this.aboutModel
            .findOne(null, { experience: 1})
            .then((value) => {
                return value.experience[id-1];
            })
    }

    async ModifyExperience(body: any): Promise<any> {
        return this.aboutModel
            .updateOne(
                null,
                {
                    $set: {
                        "experience.$[exp].year": body.year,
                        "experience.$[exp].companyname": body.companyname,
                        "experience.$[exp].from": body.from,
                        "experience.$[exp].desc": body.desc,
                        "experience.$[exp].reason": body.reason
                    }
                },
                { arrayFilters: [{ "exp._id": body.id }] }
            )
            .exec();
    }

    async GetLanguage(): Promise<any> {
        return await this.aboutModel.findOne(null, { language: 1}).exec();
    }

    async GetLanguageOne(id: any): Promise<any> {
        return await this.aboutModel
            .findOne(null, { language: 1})
            .then((value) => {
                return value.language[id-1]
            });
    }

    async ModifyLanguageOne(body: any): Promise<any> {
        return await this.aboutModel
            .updateOne(
                null,
                {
                    $set: {
                        "language.$[lang].title": body.title,
                        "language.$[lang].cefr": body.cefr,
                        "language.$[lang].level": body.level
                    }
                },
                { arrayFilters: [{"lang._id": body.id}]}
            )
            .exec();
    }
}