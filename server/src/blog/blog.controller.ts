import {Controller, Get, Param} from "@nestjs/common";
import {BlogService} from "./blog.service";

@Controller("api/v1/blog")
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Get()
    GetAllArticles(): any {
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

    @Get(":slug")
    GetArticle(@Param("slug") slug): any {
        return this.blogService.GetArticle(slug);
    }
}