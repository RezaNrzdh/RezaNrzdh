import {Query, Controller, Get, Param, Patch, Body, UseGuards, Post} from "@nestjs/common";
import {BlogService} from "../service/blog.service";
import {AuthGuard} from "../guard/auth.guard";

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

    @Get("admin/find/all")
    @UseGuards(AuthGuard)
    GetAllArticlesForAdmin(@Query() query): any {
        return this.blogService.GetAllArticlesForAdmin(query);
    }

    @Get("admin/:slug")
    @UseGuards(AuthGuard)
    GetArticleForAdmin(@Param("slug") slug): any {
        return this.blogService.GetArticleForAdmin(slug);
    }

    @Post()
    @UseGuards(AuthGuard)
    CreateArticle(@Body() body: object): any {
        return this.blogService.CreateArticle(body);
    }

    @Patch()
    @UseGuards(AuthGuard)
    ModifyArticle(@Body() body: object): any {
        return this.blogService.ModifyArticle(body);
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