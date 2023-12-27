import {Controller, Get, Param} from "@nestjs/common";
import {BlogService} from "../service/blog.service";

@Controller("api/v1/blog")
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Get()
    GetAllArticles(): Array<object> {
        return this.blogService.GetAllArticles();
    }

    @Get("/recent")
    GetRecentArticles(): Array<object> {
        return this.blogService.GetRecentArticles();
    }

    @Get("/other")
    GetOtherArticles(): Array<object> {
        return this.blogService.GetOtherArticles();
    }

    @Get(":id")
    GetArticle(@Param("id") id): object {
        return this.blogService.GetArticle();
    }
}