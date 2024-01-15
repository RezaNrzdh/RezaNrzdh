import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {About} from "../about/about.schema";
import {Contact} from "./contact.schema";

@Injectable()
export class ContactService {

    constructor(
        @InjectModel("About") private aboutModel: Model<About>,
        @InjectModel("Contact") private contactModel: Model<Contact>
    ) {}

    async CreateComment(body: any): Promise<any> {
        return await this.contactModel.create(body);
    }

    async GetInformation(): Promise<any> {
        return this.aboutModel.find().exec();
    }
}