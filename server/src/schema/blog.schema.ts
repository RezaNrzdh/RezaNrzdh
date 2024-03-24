import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
class Reply {
    @Prop()
    replyName: String;

    @Prop()
    name: String;

    @Prop()
    email: String;

    @Prop({ default: Date.now })
    date: Number;

    @Prop()
    comment: String;

    @Prop({ default: 0 })
    like: Number;

    @Prop({ default: false })
    confirmed: Boolean;
}

@Schema()
class Comment {
    @Prop()
    name: String;

    @Prop()
    email: String;

    @Prop({ default: Date.now })
    date: Number;

    @Prop()
    comment: String;

    @Prop({ default: 0 })
    like: Number;

    @Prop({ default: false })
    confirmed: Boolean;

    @Prop({ type: [Reply] })
    reply: Reply[];
}

@Schema({ collection: "article" })
export class Blog {
    @Prop()
    _id: Number;

    @Prop()
    title: String;

    @Prop()
    slug: String;

    @Prop({ default: Date.now })
    date: Number;

    @Prop({ default: false })
    publish: Boolean;

    @Prop()
    like: Number;

    @Prop()
    visit: Number;

    @Prop()
    read: Number;

    @Prop()
    img: String;

    @Prop()
    thumbnail: String;

    @Prop()
    desc: String;

    @Prop({ type: [Comment] })
    comment: Comment[];
}

export const BlogSchema = SchemaFactory.createForClass(Blog);