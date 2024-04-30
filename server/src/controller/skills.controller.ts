import {Body, Controller, Get, Param, Patch, UseGuards} from "@nestjs/common";
import {SkillsService} from "../service/skills.service";
import {AuthGuard} from "../guard/auth.guard";

@Controller("api/v1/skills")
export class SkillsController {
    constructor(private skillsService: SkillsService) {}

    @Get()
    GetSkills(): any {
        return this.skillsService.GetSkills();
    }

    @Get(":id")
    @UseGuards(AuthGuard)
    GetSkillOne(@Param("id") id): any {
        return this.skillsService.GetSkillOne(id);
    }

    @Patch()
    @UseGuards(AuthGuard)
    ModifySkill(@Body() body: any): any {
        return this.skillsService.ModifySkill(body);
    }
}