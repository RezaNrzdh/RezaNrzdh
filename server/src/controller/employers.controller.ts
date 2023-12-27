import {Controller, Get} from "@nestjs/common";
import {EmployersService} from "../service/employers.service";

@Controller("api/v1/employers")
export class EmployersController {
    constructor(private employersService: EmployersService) {}

    @Get()
    GetEmplyersComment(): Array<object> {
        return this.employersService.GetEmplyersComment();
    }
}