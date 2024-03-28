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
        const article = await this.blogModel.findOne({ slug: slug, publish: true }).exec();
        const comment = await this.commentModel.find({ pid: article._id, confirmed: true }).exec();

        return {
            _id: article._id,
            title: article.title,
            slug: article.slug,
            date: article.date,
            like: article.like,
            visit: article.visit,
            read: article.read,
            img: article.img,
            desc: article.desc,
            thumbnail: article.thumbnail,
            comment: comment
        }
    }

    async GetArticleForAdmin(slug: string): Promise<any> {
        return await this.blogModel.findOne({ slug: slug }).exec();
    }

    async CreateArticle(body: any): Promise<any> {
        const count = await this.blogModel.find().countDocuments();
        const obj = { ...body, _id: count+1, slug: `${count+1}-${body.slug}` };
        return await this.blogModel.create(obj);
    }

    async ModifyArticle(body: any): Promise<any> {
        console.log(body);
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

    async CreateReply(body: any): Promise<any> {
        return await this.blogModel
            .updateOne(
                { _id: body.pid },
                { $push: { "comment.$[cm].reply": body } },
                {arrayFilters: [{ "cm._id": body.replyId }]})
            .exec();
    }
}