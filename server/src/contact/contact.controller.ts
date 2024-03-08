import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {ContactService} from "./contact.service";

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
    GetContact(@Param("slug") slug: any): any {
        return this.contactService.GetContact(slug);
    }

    @Get("find/all")
    GetAllContacts(): any {
        return this.contactService.GetAllContacts();
    }
}