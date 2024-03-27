import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({collection: "comment"})
export class Comment {
    @Prop() pid: Number;
    @Prop({ default: false }) isArticle: Boolean;
    @Prop({ default: false }) confirmed: Boolean;
    @Prop({ default: Date.now }) date: Number;
    @Prop() email: String;
    @Prop() name: String;
    @Prop() comment: String;
    @Prop({ default: 0 }) replyCount: Number;
    @Prop() like: Number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);