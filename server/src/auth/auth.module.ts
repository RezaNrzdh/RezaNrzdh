import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {MongooseModule} from "@nestjs/mongoose";
import {AuthSchema} from "./auth.schema";
import {JwtModule} from "@nestjs/jwt";
import {constants} from "../constant";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: constants.secret,
            signOptions: { expiresIn: constants.expires }
        }),
        MongooseModule.forFeature([{ name: "Auth", schema: AuthSchema }])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}