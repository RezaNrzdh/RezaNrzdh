import {Body, Controller, Get, Patch, Post, Query, UseGuards} from "@nestjs/common";
import {AuthGuard} from "../guard/auth.guard";
import {NewsletterService} from "../service/newsletter.service";

@Controller("v1/newsletter")
export class NewsletterController {
    constructor(private newsletterService: NewsletterService) {}

    @Post()
    CreateNewsletter(@Body() body): any {
        console.log(body);
        return this.newsletterService.CreateNewsletter(body);
    }

    @Get("")
    GetNewsletter(@Query() query): any {
        return this.newsletterService.GetNewsletter(query);
    }

    @Get("all")
    @UseGuards(AuthGuard)
    GetAllNewsletters(): any {
        return this.newsletterService.GetAllNewsletters();
    }

    @Patch()
    ModifyNewsletter(@Body() body): any {
        return this.newsletterService.ModifyNewsletter(body);
    }
}