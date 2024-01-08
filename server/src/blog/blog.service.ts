import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Blog} from "./blog.schema";

@Injectable()
export class BlogService {

    constructor(@InjectModel("Blog") private blogModel: Model<Blog>) {}

    async GetAllArticles(): Promise<any> {
        return this.blogModel.find().exec();
    }

    GetRecentArticles(): Array<object> {
        return [{title: 'Recent Articles'}];
    }

    GetOtherArticles(): Array<object> {
        return [{title: 'Other Articles'}];
    }

    GetArticle(): object {
        return {title: 'One Article'};
    }
}