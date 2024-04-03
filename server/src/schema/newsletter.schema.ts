import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "newsletter" })
export class Newsletter {
    @Prop() email: String;
    @Prop({ default: Date.now }) date: Number;
    @Prop({ default: true }) active: Boolean;
}

export const NewsletterSchema = SchemaFactory.createForClass(Newsletter);