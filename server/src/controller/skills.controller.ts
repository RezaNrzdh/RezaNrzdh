import {Controller, Get} from "@nestjs/common";
import {SkillsService} from "../service/skills.service";

@Controller("api/v1/skills")
export class SkillsController {
    constructor(private skillsService: SkillsService) {}

    @Get()
    GetSkills(): any {
        return this.skillsService.GetSkills();
    }
}