import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Blog} from "../schema/blog.schema";
import {Comment} from "../schema/comment.schema";

@Injectable()
export class BlogService {

    constructor(
        @InjectModel("Blog") private blogModel: Model<Blog>,
        @InjectModel("Comment") private commentModel: Model<Comment>
    ) {}

    async GetAllArticles(query: any): Promise<any> {
        const count = await this.blogModel.find().countDocuments();
        const data  = await this.blogModel.find({ publish: true }).skip(query.offset).limit(query.limit).sort({ _id: -1 }).exec();
        return { count: count, data: data }
    }

    async GetAllArticlesForAdmin(query: any): Promise<any> {
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
                                    isArticle: "$$cm.isArticle",
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

    async GetArticleForAdmin(slug: string): Promise<any> {
        return await this.blogModel.findOne({ slug: slug }).exec();
    }

    async GetArticleTitleForAdmin(query: any): Promise<any> {
        return await this.blogModel.findOne({_id: query.id},{ title: 1, slug: 1 }).exec();
    }

    async CreateArticle(body: any): Promise<any> {
        const count = await this.blogModel.find().countDocuments();
        const obj = { ...body, _id: count+1, slug: `${count+1}-${body.slug}` };
        return await this.blogModel.create(obj);
    }

    async ModifyArticle(body: any): Promise<any> {
        return await  this.blogModel
            .updateOne(
                { slug: body.slug },
                {
                    $set: {
                        title: body.title,
                        slug: body.slug,
                        img: body.img,
                        read: body.read,
                        thumbnail: body.thumbnail,
                        desc: body.desc,
                        publish: body.publish
                    }
                }
            )
            .exec();
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