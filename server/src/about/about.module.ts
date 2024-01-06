import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {AboutSchema} from "./about.schema";
import {AboutController} from "./about.controller";
import {AboutService} from "./about.service";

@Module({
    imports: [ MongooseModule.forFeature([{ name: "About", schema: AboutSchema }]) ],
    controllers: [ AboutController ],
    providers: [ AboutService ]
})
export class AboutModule {}