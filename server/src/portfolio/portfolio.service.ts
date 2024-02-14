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

    async GetTopPortfolios(cat: number): Promise<any> {
        return await this.portfolioModel
            .find({ category: cat })
            .limit(4)
            .sort({ _id: -1 })
            .exec();
    }

    async GetPortfolio(slug: string): Promise<any> {
        const a = await this.portfolioModel
            .aggregate([
                { $match: { slug: slug }},
                { $unwind: "$comment" },
                { $match: { "comment.confirmed": true } },
                {
                    $group:
                        {
                            _id: "$_id",
                            title: { "$first": "$title"},
                            slug: { "$first": "$slug" },
                            date: { "$first": "$date" },
                            visit: { "$first": "$visit" },
                            like: { "$first": "$like" },
                            img: { "$first": "$img" },
                            thumbnail: { "$first": "$thumbnail" },
                            desc: { "$first": "$desc" },
                            category: { "$first": "$category" },
                            comment: { $push: "$comment" }
                        }
                }
            ])
            .exec();
        return a[0];
    }

    async CreateComment(body: any): Promise<any> {
        return await this.portfolioModel
            .updateOne({ _id: body.pid }, { $push: { comment: body.body }})
            .exec();

    }
}