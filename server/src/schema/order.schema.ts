import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "order" })
export class Order {
    @Prop()
    _id: Number;

    @Prop()
    title: String;

    @Prop()
    icon: String;

    @Prop()
    desc: String;

    @Prop()
    options: [];
}

export const OrderSchema = SchemaFactory.createForClass(Order);