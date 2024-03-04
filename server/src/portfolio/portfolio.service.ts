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

        query.publish
            ? _filter = { publish: 2 }
            : null;

        query.sortBy === "id"
            ? _sort = {_id: -1}
            : _sort = {visit: -1};

        query.cat
            ? _filter = {..._filter, category: query.cat }
            : null;

        const count = await this.portfolioModel.find(_filter).countDocuments();
        const data = await this.portfolioModel
            .find(_filter, { category: 1, like: 1, slug: 1, date: 1, publish: 1, thumbnail: 1, title: 1, visit: 1, _id: 1 })
            .skip(query.skip)
            .limit(query.limit)
            .sort(_sort)
            .exec();

        return { count: count, data: data }
    }

    async GetTopPortfolios(cat: number): Promise<any> {
        return await this.portfolioModel
            .find({ category: cat, publish: 2 },{ category: 1, like: 1, slug: 1, thumbnail: 1, title: 1, visit: 1, _id: 1 })
            .limit(4)
            .sort({ _id: -1 })
            .exec();
    }

    async GetPortfolio(slug: string): Promise<any> {
        const a = await this.portfolioModel
            .aggregate([
                { $match: { slug: slug, publish: 2 }},
                {
                    $project: {
                        title: "$title", slug: "$slug", date: "$date", publish: "$publish", visit: "$visit",
                        like: "$like", img: "$img", thumbnail: "$thumbnail", desc: "$desc", category: "$category",
                        comment: {
                            $filter: {
                                input: "$comment", as: "cm",
                                cond: {
                                    $eq: [ "$$cm.confirmed", true ]
                                }
                            }
                        }
                    }
                },
                {
                    $project: {
                        title: "$title", slug: "$slug", date: "$date", publish: "$publish", visit: "$visit",
                        like: "$like", img: "$img", thumbnail: "$thumbnail", desc: "$desc", category: "$category",
                        comment: {
                            $map: {
                                input: "$comment", as: "cm",
                                in: {
                                    _id: "$$cm._id", name: "$$cm.name", email: "$$cm.email", comment: "$$cm.comment",
                                    like: "$$cm.like", confirmed: "$$cm.confirmed", date: "$$cm.date",
                                    reply: {
                                        $filter: {
                                            input: "$$cm.reply", as: "cm2",
                                            cond: {
                                                $eq: [ "$$cm2.confirmed", true ]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ])
            .exec();
        return a[0];
    }

    async GetPortfolioForAdmin(slug: string): Promise<any> {
        return await this.portfolioModel
            .findOne(
                { slug: slug },
                { category: 1, date: 1, desc: 1, img: 1, publish: 1, slug: 1, thumbnail: 1, title: 1, _id: 1 })
            .exec();
    }

    async CreatePortfolio(body: any): Promise<any> {
        const count = await this.portfolioModel.find().countDocuments();
        const obj = { ...body, _id: count+1, slug: `${count+1}-${body.slug}` };
        return await this.portfolioModel
            .create(obj);
    }

    async ModifyPortfolio(body: any): Promise<any> {
        return await  this.portfolioModel
            .updateOne(
                { slug: body.slug },
                {
                    $set: {
                        title: body.title,
                        slug: body.slug,
                        category: body.category,
                        publish: body.publish,
                        thumbnail: body.thumbnail,
                        img: body.img,
                        desc: body.desc
                    }
                })
            .exec()
    }

    async CreateComment(body: any): Promise<any> {
        return await this.portfolioModel
            .updateOne({ _id: body.pid }, { $push: { comment: body.body }})
            .exec();

    }

    async CreateReply(body: any): Promise<any> {
        return await this.portfolioModel
            .updateOne(
                { _id: body.pid },
                { $push: { "comment.$[cm].reply": body } },
                {arrayFilters: [{ "cm._id": body.replyId }]})
            .exec();
    }
}