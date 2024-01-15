import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "contact" })
export class Contact {

    @Prop()
    name: String;

    @Prop()
    email: String;

    @Prop()
    phone: Number;

    @Prop()
    subject: String;

    @Prop()
    comment: String;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);