import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Portfolio} from "../schema/portfolio.schema";

@Injectable()
export class PortfolioService {

    constructor(@InjectModel("Portfolio") private portfolioModel: Model<Portfolio>){}

    async GetAllPortfolios(query: any): Promise<any> {
        let _sort: Record<any, any>;
        let _filter: Record<any, any>;

        query.publish
            ? _filter = { publish: 2 }
            : _filter = { publish: { $gt: 0 } };

        query.sortBy === "id"
            ? _sort = {_id: -1}
            : _sort = {visit: -1};

        query.cat
            ? _filter = {..._filter, category: query.cat }
            : null;

        const count = await this.portfolioModel.find(_filter).countDocuments();
        const data = await this.portfolioModel
            .aggregate([
                { $match: _filter },
                { $sort: _sort },
                { $skip: parseInt(query.skip) },
                { $limit: parseInt(query.limit) },
                {
                    $project: {
                        _id: 1,
                        category: 1,
                        like: 1,
                        slug: 1,
                        date: 1,
                        publish: 1,
                        thumbnail: 1,
                        title: 1,
                        visit: 1,
                        comment: {
                            $cond: {
                                if: { $isArray: "$comment" },
                                then: {
                                    $size: {
                                        $filter: {
                                            input: "$comment",
                                            as: "cm",
                                            cond: {
                                                $eq: [ "$$cm.confirmed", false ]
                                            }
                                        }
                                    }
                                },
                                else: 0
                            }
                        },
                        reply: {
                            $map: {
                                input: "$comment",
                                as: "cm",
                                in: {
                                    $cond: {
                                        if: { $isArray: "$$cm.reply" },
                                        then: {
                                            $size: {
                                                $filter: {
                                                    input: "$$cm.reply",
                                                    as: "rp",
                                                    cond: {
                                                        $eq: [ "$$rp.confirmed", false ]
                                                    }
                                                }
                                            }
                                        },
                                        else: 0
                                    }
                                }
                            }
                        }
                    }
                }
            ])
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

    async GetArticleTitleForAdmin(query: any): Promise<any> {
        return await this.portfolioModel.findOne({_id: query.id}, {title: 1, slug: 1}).exec();
    }

    async CreatePortfolio(body: any): Promise<any> {
        const count = await this.portfolioModel.find().countDocuments();
        const obj = { ...body, _id: count+1, slug: `${count+1}-${body.slug}` };
        return await this.portfolioModel.create(obj);
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

    // async CreateComment(body: any): Promise<any> {
    //     return await this.commentModel.create(body);
    // }

    // async CreateReply(body: any): Promise<any> {
    //     await this.commentModel.updateOne({ _id: body.replyId }, { $inc: { replyCount: 1 }}).exec();
    //     return await this.replyModel.create(body);
    // }
    //
    // async GetReplies(query: any): Promise<any> {
    //     return await this.replyModel.find({ pid: query.pid, replyId: query.replyId }).exec();
    // }

    // async GetPortfolio(slug: string): Promise<any> {
    //     const portfolio = await this.portfolioModel.findOne({ slug: slug, publish: 2}).exec();
    //     const comment = await this.commentModel.find({ pid: portfolio._id, confirmed: true, isArticle: false }).exec();
    //
    //     return {
    //         _id: portfolio._id,
    //         title: portfolio.title,
    //         slug: portfolio.slug,
    //         date: portfolio.date,
    //         category: portfolio.category,
    //         img: portfolio.img,
    //         desc: portfolio.desc,
    //         like: portfolio.like,
    //         visit: portfolio.visit,
    //         comment: comment
    //     };
    // }
}