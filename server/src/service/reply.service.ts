import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Reply} from "../schema/reply.schema";

@Injectable()
export class ReplyService {
    constructor(@InjectModel("Reply") private replyModel: Model<Reply>) {
    }

    async GetReplies(query: any): Promise<any> {
        return await this.replyModel
            .find({
                pid: query.pid,
                replyId: query.replyId,
                confirmed: true,
                isArticle: query.isArticle
            })
            .exec();
    }

    async CreateReply(body: any): Promise<any> {
        return await this.replyModel.create(body);
    }
}