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

    @Get("admin/find/title")
    @UseGuards(AuthGuard)
    GetArticleTitleForAdmin(@Query() query): any {
        return this.blogService.GetArticleTitleForAdmin(query);
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

    @Post("comment")
    CreateComment(@Body() body: object): any {
        console.log(2);
        return this.blogService.CreateComment(body);
    }

    @Patch("/reply")
    CreateReply(@Body() body: any): any {
        return this.blogService.CreateReply(body);
    }

    @Patch("comment/confirm")
    @UseGuards(AuthGuard)
    ConfirmComments(@Body() body: any): any {
        return this.blogService.ConfirmComments(body);
    }

    @Patch("reply/confirm")
    @UseGuards(AuthGuard)
    ConfirmReplies(@Body() body: any): any {
        return this.blogService.ConfirmReplies(body);
    }

    @Patch("like")
    CreateLike(@Body() body: any): any {
        console.log(3);
        return this.blogService.CreateLike(body);
    }
}