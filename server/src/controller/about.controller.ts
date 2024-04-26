import {Controller, Get, UseGuards} from "@nestjs/common";
import {AboutService} from "../service/about.service";
import {AuthGuard} from "../guard/auth.guard";

@Controller("api/v1/about")
export class AboutController {
    constructor(private aboutService: AboutService) {}

    @Get()
    GetAboutMe(): any {
        return this.aboutService.GetAboutMe();
    }

    @Get("skills")
    @UseGuards(AuthGuard)
    GetSkills(): any {
        return this.aboutService.GetSkills();
    }

    @Get("experience")
    @UseGuards(AuthGuard)
    GetExperience(): any {
        return this.aboutService.GetExperience();
    }

    @Get("language")
    @UseGuards(AuthGuard)
    GetLanguage(): any {
        return this.aboutService.GetLanguage();
    }
}