import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({collection: "user"})
export class User {
    @Prop()
    _id: Number;

    @Prop()
    email: String;

    @Prop()
    name: String;

    @Prop()
    password: String;

    @Prop()
    role: Number;

    @Prop()
    phone: Number;

    @Prop()
    attempt: Number;

    @Prop({ default: Date.now })
    registerDate: Number;
}

export const UserSchema = SchemaFactory.createForClass(User);