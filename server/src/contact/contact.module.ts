import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {AboutSchema} from "../about/about.schema";
import {ContactController} from "./contact.controller";
import {ContactService} from "./contact.service";
import {ContactSchema} from "./contact.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "About", schema: AboutSchema },
            { name: "Contact", schema: ContactSchema }
        ]),
    ],
    controllers: [ContactController],
    providers: [ContactService]
})
export class ContactModule {}