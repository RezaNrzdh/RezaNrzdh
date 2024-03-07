import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "user" })
export class Auth {
    @Prop({ unique: true })
    email: String;

    @Prop({ default: "" })
    name: String;

    @Prop({ minLength: 6 })
    password: String;

    @Prop({ default: 1 })
    role: Number;

    @Prop({ default: 0 })
    phone: Number;

    @Prop({ default: Date.now })
    registerDate: Number;

    @Prop({ default: true })
    available: Boolean

    @Prop({ default: 0, max: 5 })
    attempt: Number;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);