import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Comment} from "../schema/comment.schema";

@Injectable()
export class CommentService {
    constructor(@InjectModel("Comment") private commentModel: Model<Comment>) {}

    async GetComments(query: any): Promise<any> {
        return await this.commentModel
            .find({
                pid: query._id,
                confirmed: true,
                isArticle: query.isArticle
            })
            .exec();
    }

    async CreateComment(body: any): Promise<any> {
        return await this.commentModel.create(body);
    }
}