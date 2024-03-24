import {Controller, Get} from "@nestjs/common";
import {AboutService} from "../service/about.service";

@Controller("api/v1/about")
export class AboutController {
    constructor(private aboutService: AboutService) {}

    @Get()
    GetAboutMe(): any {
        return this.aboutService.GetAboutMe();
    }
}