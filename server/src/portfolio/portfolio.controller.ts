import {Body, Controller, Get, Param, Post, Query, Patch} from "@nestjs/common";
import {PortfolioService} from "./portfolio.service";

@Controller("api/v1/portfolio")
export class PortfolioController {
    constructor(private portfolioService: PortfolioService) {}

    @Get("limit")
    GetAllPortfolios(@Query() query): any {
        return this.portfolioService.GetAllPortfolios(query);
    }

    @Get(":slug")
    GetPortfolio(@Param("slug") slug): any {
        return this.portfolioService.GetPortfolio(slug);
    }

    @Get("top/:number")
    GetTopPortfolios(@Param('number') number): any {
        return this.portfolioService.GetTopPortfolios(number);
    }

    @Patch("comment")
    CreateComment(@Body() body: object): any {
        return this.portfolioService.CreateComment(body);
    }

    @Patch("reply")
    CreateReply(@Body() body: object): object {
        return this.portfolioService.CreateReply(body);
    }
}