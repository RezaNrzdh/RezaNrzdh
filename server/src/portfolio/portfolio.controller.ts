import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {PortfolioService} from "./portfolio.service";

@Controller("api/v1/portfolio")
export class PortfolioController {
    constructor(private portfolioService: PortfolioService) {}

    @Get()
    GetAllPortfolios(): any {
        return this.portfolioService.GetAllPortfolios();
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