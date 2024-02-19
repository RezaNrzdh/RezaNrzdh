import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Blog} from "./blog.schema";

@Injectable()
export class BlogService {

    constructor(@InjectModel("Blog") private blogModel: Model<Blog>) {}

    async GetAllArticles(query: any): Promise<any> {
        const count = await this.blogModel.find().countDocuments();
        const data  = await this.blogModel.find().skip(query.offset).limit(query.limit).sort({ _id: -1 }).exec();
        return { count: count, data: data }
    }

    async GetArticle(slug: string): Promise<any> {
        const filter = await this.blogModel
            .aggregate([
                { $match: { slug: slug } },
                {
                    $project: {
                        title: "$title",
                        slug: "$slug",
                        read: "$read",
                        visit: "$visit",
                        like: "$like",
                        img: "$img",
                        desc: "$desc",
                        date: "$date",
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
                },
                {
                    $project: {
                        title: "$title",
                        slug: "$slug",
                        read: "$read",
                        visit: "$visit",
                        like: "$like",
                        img: "$img",
                        desc: "$desc",
                        date: "$date",
                        comment: {
                            $map: {
                                input: "$comment",
                                as: "cm",
                                in: {
                                    _id: "$$cm._id",
                                    name: "$$cm.name",
                                    email: "$$cm.email",
                                    comment: "$$cm.comment",
                                    like: "$$cm.like",
                                    confirmed: "$$cm.confirmed",
                                    date: "$$cm.date",
                                    reply: {
                                        $filter: {
                                            input: "$$cm.reply",
                                            as: "cm2",
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
        return filter[0];
    }

    async CreateComment(body: any): Promise<any> {
        return await this.blogModel
            .updateOne({ _id: body.pid }, { $push: { comment: body.body }})
            .exec();

    }

    async CreateReply(body: any): Promise<any> {
        return await this.blogModel
            .updateOne(
                { _id: body.pid },
                { $push: { "comment.$[cm].reply": body } },
                {arrayFilters: [{ "cm._id": body.replyId }]})
            .exec();
    }
}