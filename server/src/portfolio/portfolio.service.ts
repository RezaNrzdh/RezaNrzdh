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
                {
                    $project: {
                        title: "$title",
                        slug: "$slug",
                        date: "$date",
                        visit: "$visit",
                        like: "$like",
                        img: "$img",
                        thumbnail: "$thumbnail",
                        desc: "$desc",
                        category: "$category",
                        comment: {
                            $filter: {
                                input: "$comment",
                                as: "cm",
                                cond: {
                                    $eq: [ "$$cm.confirmed", true ]
                                }
                            }
                        }
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

    async CreateReply(body: any): Promise<any> {
        return await this.portfolioModel
            .updateOne(
                { _id: body.portfolioId },
                { $push: { "comment.$[cm].reply": body } },
                {arrayFilters: [{ "cm._id": body.replyId }]})
            .exec();
    }
}