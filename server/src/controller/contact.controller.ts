import {Controller, Post} from "@nestjs/common";
import {ContactService} from "../service/contact.service";

@Controller("contact")
export class ContactController {
    constructor(private contactService: ContactService) {
    }

    @Post("comment")
    CreateComment(): object {
        return {};
    }
}