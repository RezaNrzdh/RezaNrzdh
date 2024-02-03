import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Portfolio} from "./portfolio.schema";

@Injectable()
export class PortfolioService {

    constructor(@InjectModel("Portfolio") private portfolioModel: Model<Portfolio>) {}

    async GetAllPortfolios(lt: number, limit: number): Promise<any> {
        if(lt == 0)
            return await this.portfolioModel.find().limit(limit).sort({ _id: -1}).exec();
        else
            return await this.portfolioModel.find({ _id: { $lt: lt } }).limit(limit).sort({ _id: -1}).exec();
    }

    async GetTopPortfolios(value: number = 4): Promise<any> {
        return await this.portfolioModel.find().limit(value).sort({ _id: -1 });
    }

    async GetPortfolio(slug: string): Promise<any> {
        return await this.portfolioModel.findOne({ slug: { $regex: slug } }).exec();
    }

    async GetPortfolioByCategory(value: number): Promise<any> {
        return await this.portfolioModel.find({ category: value }).sort({ _id: -1 }).exec();
    }
}