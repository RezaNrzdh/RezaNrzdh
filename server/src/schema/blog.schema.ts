import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

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
}

export const BlogSchema = SchemaFactory.createForClass(Blog);