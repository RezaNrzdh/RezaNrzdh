import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {SchemaTypes, Types} from "mongoose";

@Schema({ collection: "reply" })
export class Reply {
    @Prop() pid: Number;
    @Prop({ default: false }) isArticle: Boolean;
    @Prop({ default: false }) confirmed: Boolean;
    @Prop({ default: Date.now }) date: Number;
    @Prop({ type: SchemaTypes.ObjectId }) replyId: Types.ObjectId;
    @Prop() replyName: String;
    @Prop() email: String;
    @Prop() name: String;
    @Prop() comment: String;
    @Prop() like: Number;
}

export const ReplySchema = SchemaFactory.createForClass(Reply);