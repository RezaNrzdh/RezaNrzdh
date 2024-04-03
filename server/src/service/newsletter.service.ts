import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Newsletter} from "../schema/newsletter.schema";

@Injectable()
export class NewsletterService {

    constructor(@InjectModel("Newsletter") private newsletterModel: Model<Newsletter> ) {}

    async CreateNewsletter(body: any): Promise<any> {
        return this.newsletterModel.create(body);
    }

    async GetNewsletter(email: string): Promise<any> {
        return await this.newsletterModel.findOne({ email: email }).exec();
    }

    async GetAllNewsletters(): Promise<any> {
        return await this.newsletterModel.find().exec();
    }

    async ModifyNewsletter(body: any): Promise<any> {
        //
    }
}