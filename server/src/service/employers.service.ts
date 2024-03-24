import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Employer} from "../schema/employer.schema";
import {Model} from "mongoose";

@Injectable()
export class EmployersService {

    constructor(@InjectModel("Employer") private employerModel: Model<Employer>) {}

    async GetEmplyersComment(): Promise<any> {
        return await this.employerModel.find().exec();
    }
}