import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {ReplyService} from "../service/reply.service";

@Controller("api/v1/reply")
export class ReplyController {
    constructor(private replyService: ReplyService) {}

    @Get()
    GetReplies(@Query() query): any {
        return this.replyService.GetReplies(query);
    }

    @Post()
    CreateReply(@Body() body): any {
        return this.replyService.CreateReply(body);
    }
}