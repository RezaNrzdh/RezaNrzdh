import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "article" })
export class Blog {
    @Prop()
    _id: Number;

    @Prop()
    title: String;

    @Prop()
    date: Number;

    @Prop()
    like: Number;

    @Prop()
    visit: Number;

    @Prop()
    read: Number;

    @Prop()
    img: String;

    @Prop()
    desc: String;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);