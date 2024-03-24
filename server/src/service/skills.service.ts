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
}