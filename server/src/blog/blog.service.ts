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

    GetRecentArticles(): Array<object> {
        return [{title: 'Recent Articles'}];
    }

    GetOtherArticles(): Array<object> {
        return [{title: 'Other Articles'}];
    }

    async GetArticle(slug: string): Promise<any> {
        return this.blogModel.findOne({ slug: { $regex: slug } }).exec();
    }
}