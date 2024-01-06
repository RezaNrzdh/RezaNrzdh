import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "portfolio" })
export class Portfolio {
    @Prop()
    _id: Number;

    @Prop()
    title: String;

    @Prop()
    visit: Number;

    @Prop()
    like: Number;

    @Prop()
    img: String;

    @Prop()
    url: String;

    @Prop()
    category: String;
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);