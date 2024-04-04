import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {SchemaTypes, Types} from "mongoose";

@Schema()
class Reply {
    @Prop() replyName: String;
    @Prop() name: String;
    @Prop() email: String;
    @Prop({ default: Date.now }) date: Number;
    @Prop() comment: String;
    @Prop({ default: 0 }) like: Number;
    @Prop({ default: false }) confirmed: Boolean;
}

@Schema()
class Comment {
    @Prop() name: String;
    @Prop() email: String;
    @Prop({ default: Date.now }) date: Number;
    @Prop() comment: String;
    @Prop({ default: 0 }) like: Number;
    @Prop({ default: false }) confirmed: Boolean;
    @Prop({ type: [Reply] }) reply: Reply[];
}

@Schema()
class Like {
    @Prop({ type: SchemaTypes.ObjectId }) uid: Types.ObjectId;
}

@Schema({ collection: "portfolio" })
export class Portfolio {
    @Prop() _id: Number;
    @Prop() title: String;
    @Prop() slug: String;
    @Prop({ default: Date.now }) date: Number;
    @Prop() publish: Number;
    @Prop({ default: 0 }) visit: Number;
    @Prop({ default: 0, type: [Like] }) like: Like[];
    @Prop() img: [String];
    @Prop() thumbnail: String;
    @Prop() desc: String;
    @Prop() category: Number;
    @Prop({ type: [Comment] }) comment: Comment[];
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);