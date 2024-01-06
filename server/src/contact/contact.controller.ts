import {Body, Controller, Post} from "@nestjs/common";
import {ContactService} from "./contact.service";

@Controller("api/v1/contact")
export class ContactController {
    constructor(private contactService: ContactService) {
    }

    @Post("comment")
    CreateComment(@Body() body: object): object {
        return body;
    }
}