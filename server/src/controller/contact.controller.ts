import {Body, Controller, Get, Param, Post, UseGuards} from "@nestjs/common";
import {ContactService} from "../service/contact.service";
import {AuthGuard} from "../guard/auth.guard";

@Controller("api/v1/contact")
export class ContactController {
    constructor(private contactService: ContactService) {
    }

    @Post("comment")
    CreateComment(@Body() body: object): object {
        return this.contactService.CreateComment(body);
    }

    @Get("info")
    GetInformation(): any {
        return this.contactService.GetInformation();
    }

    @Get(":slug")
    @UseGuards(AuthGuard)
    GetContact(@Param("slug") slug: any): any {
        return this.contactService.GetContact(slug);
    }

    @Get("find/all")
    @UseGuards(AuthGuard)
    GetAllContacts(): any {
        return this.contactService.GetAllContacts();
    }
}