import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Skill} from "../schema/skill.schema";

@Injectable()
export class SkillsService {

    constructor(@InjectModel("Skill") private skillModel: Model<Skill>) {}

    async GetSkills(): Promise<any> {
        return await this.skillModel.find().exec();
    }

    async GetSkillOne(id: any): Promise<any> {
        return await this.skillModel.findOne({ _id: id }).exec();
    }

    async ModifySkill(body: any): Promise<any> {
        return this.skillModel
            .updateOne(
                { _id: body.id },
                {
                    title: body.title,
                    levelName: body.levelName,
                    level: body.level,
                    desc: body.desc ,
                }
            )
            .exec();
    }
}