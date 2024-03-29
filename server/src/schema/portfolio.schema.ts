import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "portfolio" })
export class Portfolio {
    @Prop() _id: Number;
    @Prop() title: String;
    @Prop() slug: String;
    @Prop({ default: Date.now }) date: Number;
    @Prop() publish: Number;
    @Prop({ default: 0 }) visit: Number;
    @Prop({ default: 0 }) like: Number;
    @Prop() img: [String];
    @Prop() thumbnail: String;
    @Prop() desc: String;
    @Prop() category: Number;
    // @Prop({ type: [Comment] }) comment: Comment[];
}

// @Schema()
// class Comment {
//     @Prop() name: String;
//     @Prop() email: String;
//     @Prop({ default: Date.now }) date: Number;
//     @Prop() comment: String;
//     @Prop({ default: 0 }) like: Number;
//     @Prop({ default: false }) confirmed: Boolean;
//     @Prop({ type: [Reply] }) reply: Reply[];
// }

// @Schema()
// class Reply {
//     @Prop() replyName: String;
//     @Prop() name: String;
//     @Prop() email: String;
//     @Prop({ default: Date.now }) date: Number;
//     @Prop() comment: String;
//     @Prop({ default: 0 }) like: Number;
//     @Prop({ default: false }) confirmed: Boolean;
// }

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);