import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "about" })
export class About {
    @Prop()
    _id: Number;

    @Prop()
    jobtitle: String;

    @Prop()
    aboutme: String;

    @Prop()
    phone: String;

    @Prop()
    email: String;

    @Prop()
    birthday: String;

    @Prop()
    married: String;

    @Prop()
    militaryservice: String;

    @Prop()
    experience: [];

    @Prop()
    skills: [];

    @Prop()
    language: [];
}

export const AboutSchema = SchemaFactory.createForClass(About);