import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {AboutSchema} from "../about/about.schema";
import {ContactController} from "./contact.controller";
import {ContactService} from "./contact.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: "Contact", schema: AboutSchema }])],
    controllers: [ContactController],
    providers: [ContactService]
})
export class ContactModule {}