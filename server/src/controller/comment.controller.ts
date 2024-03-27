import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {CommentService} from "../service/comment.service";

@Controller("api/v1/comment")
export class CommentController {
    constructor(private commentService: CommentService) {}

    @Get()
    GetComments(@Query() query): any {
        return this.commentService.GetComments(query);
    }

    @Post()
    CreateComment(@Body() body: object): any {
        return this.commentService.CreateComment(body);
    }
}