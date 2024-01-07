import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {About} from "../about/about.schema";

@Injectable()
export class ContactService {

    constructor(@InjectModel("Contact") private contactModel: Model<About>) {}

    CreateComment(): object {
        return {};
    }

    async GetInformation(): Promise<any> {
        return this.contactModel.find().exec();
    }
}