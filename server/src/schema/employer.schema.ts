import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "employer" })
export class Employer {
    @Prop()
    _id: Number;

    @Prop()
    name: String;

    @Prop()
    company: String;

    @Prop()
    desc: String;

    @Prop()
    publish: Boolean;
}

export const EmployerSchema = SchemaFactory.createForClass(Employer);