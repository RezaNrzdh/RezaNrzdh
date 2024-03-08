import {Query, Controller, Get, Param, Patch, Body} from "@nestjs/common";
import {BlogService} from "./blog.service";

@Controller("api/v1/blog")
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Get()
    GetAllArticles(@Query() query): any {
        return this.blogService.GetAllArticles(query);
    }

    @Get(":slug")
    GetArticle(@Param("slug") slug): any {
        return this.blogService.GetArticle(slug);
    }

    @Get("admin/:slug")
    GetArticleForAdmin(@Param("slug") slug): any {
        return this.blogService.GetArticleForAdmin(slug);
    }

    @Patch("/comment")
    CreateComment(@Body() body: any): any {
        return this.blogService.CreateComment(body);
    }

    @Patch("/reply")
    CreateReply(@Body() body: any): any {
        return this.blogService.CreateReply(body);
    }
}