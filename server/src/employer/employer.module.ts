import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {EmployerSchema} from "./employer.schema";
import {EmployersController} from "./employers.controller";
import {EmployersService} from "./employers.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Employer", schema: EmployerSchema }])
    ],
    controllers: [ EmployersController ],
    providers: [ EmployersService ]
})
export class EmployerModule {

}