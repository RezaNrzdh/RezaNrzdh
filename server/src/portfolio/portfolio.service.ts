import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Portfolio} from "./portfolio.schema";

@Injectable()
export class PortfolioService {

    constructor(@InjectModel("Portfolio") private portfolioModel: Model<Portfolio>) {}

    async GetAllPortfolios(query: any): Promise<any> {
        let _sort: Record<any, any>;
        let _filter: Record<any, any>;

        query.sortBy === "id"
            ? _sort = {_id: -1}
            : _sort = {visit: -1};

        query.cat
            ? _filter = {category: query.cat }
            : null;

        const count = await this.portfolioModel.find(_filter).countDocuments();
        const data = await this.portfolioModel
            .find(_filter)
            .skip(query.skip)
            .limit(query.limit)
            .sort(_sort)
            .exec();

        return { count: count, data: data }
    }

    async GetTopPortfolios(value: number = 4): Promise<any> {
        return await this.portfolioModel
            .find()
            .limit(value)
            .sort({ _id: -1 })
            .exec();
    }

    async GetPortfolio(slug: string): Promise<any> {
        return await this.portfolioModel
            .findOne({ slug: { $regex: slug } })
            .exec();
    }
}