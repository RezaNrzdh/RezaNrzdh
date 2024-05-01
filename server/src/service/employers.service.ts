import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Employer} from "../schema/employer.schema";
import {Model} from "mongoose";

@Injectable()
export class EmployersService {

    constructor(@InjectModel("Employer") private employerModel: Model<Employer>) {}

    async GetEmplyersComment(): Promise<any> {
        return await this.employerModel.find({ publish: true }).limit(4).exec();
    }

    async GetEmplyersCommentForAdmin(): Promise<any> {
        return await this.employerModel.find().exec();
    }

    async GetEmplyersCommentOne(id: any): Promise<any> {
        return await this.employerModel.findOne({ _id: id }).exec();
    }

    async CreateEmployersComment(body: any): Promise<any> {
        const count = await this.employerModel.find().countDocuments();
        const obj = {
            _id: count+1,
            name: body.name,
            compnay: body.compnay,
            desc: body.desc,
            publish: body.publish
        }
        return await this.employerModel.create(obj);
    }

    async ModifyEmployersComment(body: any): Promise<any> {
        return await this.employerModel
            .updateOne(
                { _id: body.id },
                {
                    name: body.name,
                    company: body.company,
                    desc: body.desc,
                    publish: body.publish
                }
            )
            .exec();
    }
}