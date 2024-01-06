import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "skill" })
export class Skill {
    @Prop()
    _id: Number;

    @Prop()
    title: String;

    @Prop()
    img: String;

    @Prop()
    desc: String;

    @Prop()
    levelName: String;

    @Prop()
    level: Number;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);