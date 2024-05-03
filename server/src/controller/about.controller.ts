import {Body, Controller, Get, Param, Patch, UseGuards} from "@nestjs/common";
import {AboutService} from "../service/about.service";
import {AuthGuard} from "../guard/auth.guard";

@Controller("api/v1/about")
export class AboutController {
    constructor(private aboutService: AboutService) {}

    @Get()
    GetAboutMe(): any {
        return this.aboutService.GetAboutMe();
    }

    @Get("personalinfo")
    GetPersonalInfo(): any {
        return this.aboutService.GetPersonalInfo();
    }

    @Patch("personalinfo")
    ModifyPersonalInfo(@Body() body: any): any {
        return this.aboutService.ModifyPersonalInfo(body);
    }

    @Get("skills")
    @UseGuards(AuthGuard)
    GetSkills(): any {
        return this.aboutService.GetSkills();
    }

    @Get("skills/:id")
    @UseGuards(AuthGuard)
    GetSkillOne(@Param("id") id: any): any {
        return this.aboutService.GetSkillOne(id);
    }

    @Patch("skills")
    @UseGuards(AuthGuard)
    ModifySkills(@Body() body: any): any {
        return this.aboutService.ModifySkills(body);
    }

    @Get("experience")
    @UseGuards(AuthGuard)
    GetExperience(): any {
        return this.aboutService.GetExperience();
    }

    @Get("experience/:id")
    @UseGuards(AuthGuard)
    GetExperienceOne(@Param("id") id: any): any {
        return this.aboutService.GetExperienceOne(id);
    }

    @Patch("experience")
    @UseGuards(AuthGuard)
    ModifyExperience(@Body() body: any): any {
        return this.aboutService.ModifyExperience(body);
    }

    @Get("language")
    @UseGuards(AuthGuard)
    GetLanguage(): any {
        return this.aboutService.GetLanguage();
    }

    @Get("language/:id")
    @UseGuards(AuthGuard)
    GetLanguageOne(@Param("id") id: any): any {
        return this.aboutService.GetLanguageOne(id);
    }

    @Patch("language")
    ModifyLanguageOne(@Body() body: any): any {
        return this.aboutService.ModifyLanguageOne(body);
    }
}