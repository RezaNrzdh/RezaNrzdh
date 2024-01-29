import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "portfolio" })
export class Portfolio {
    @Prop()
    _id: Number;

    @Prop()
    title: String;

    @Prop()
    slug: String;

    @Prop()
    visit: Number;

    @Prop()
    like: Number;

    @Prop()
    img: [String];

    @Prop()
    desc: String;

    @Prop()
    category: Number;
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);