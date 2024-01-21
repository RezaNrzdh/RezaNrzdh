import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {PortfolioService} from "./portfolio.service";

@Controller("api/v1/portfolio")
export class PortfolioController {
    constructor(private portfolioService: PortfolioService) {}

    @Get()
    GetAllPortfolios(): any {
        return this.portfolioService.GetAllPortfolios();
    }

    @Get(":slug")
    GetPortfolio(@Param("slug") slug): any {
        return this.portfolioService.GetPortfolio(slug);
    }

    @Get("top/:number")
    GetTopPortfolios(@Param('number') number): any {
        return this.portfolioService.GetTopPortfolios(number);
    }

    @Post("comment")
    CreateComment(@Body() body: object): object {
        return body;
    }

    @Post("reply")
    CreateReply(@Body() body: object): object {
        return Body;
    }
}