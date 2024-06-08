import {Body, Controller, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {EmployersService} from "../service/employers.service";
import {AuthGuard} from "../guard/auth.guard";

@Controller("v1/employers")
export class EmployersController {
    constructor(private employersService: EmployersService) {}

    @Get()
    GetEmplyersComment(): any {
        return this.employersService.GetEmplyersComment();
    }

    @Get("/admin")
    @UseGuards(AuthGuard)
    GetEmplyersCommentForAdmin(): any {
        return this.employersService.GetEmplyersCommentForAdmin();
    }

    @Get(":id")
    GetEmplyersCommentOne(@Param("id") id: any): any {
        return this.employersService.GetEmplyersCommentOne(id);
    }

    @Post()
    CreateEmployersComment(@Body() body: any): any {
        return this.employersService.CreateEmployersComment(body);
    }

    @Patch()
    ModifyEmployersComment(@Body() body: any): any {
        return this.employersService.ModifyEmployersComment(body);
    }
}