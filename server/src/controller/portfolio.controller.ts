import {
    Body, Controller, Get, Param, Post,
    Query, Patch, UseGuards
} from "@nestjs/common";
import {PortfolioService} from "../service/portfolio.service";
import {AuthGuard} from "../guard/auth.guard";


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

    @Get("admin/:slug")
    @UseGuards(AuthGuard)
    GetPortfolioForAdmin(@Param("slug") slug): any {
        return this.portfolioService.GetPortfolioForAdmin(slug);
    }

    @Get("top/:number")
    GetTopPortfolios(@Param('number') number): any {
        return this.portfolioService.GetTopPortfolios(number);
    }

    @Post()
    @UseGuards(AuthGuard)
    CreatePortfolio(@Body() body: object): any {
        return this.portfolioService.CreatePortfolio(body);
    }

    @Patch()
    @UseGuards(AuthGuard)
    ModifyPortfolio(@Body() body: object): any {
        return this.portfolioService.ModifyPortfolio(body);
    }

    @Post("comment")
    CreateComment(@Body() body: object): any {
        return this.portfolioService.CreateComment(body);
    }

    @Post("reply")
    CreateReply(@Body() body: object): object {
        return this.portfolioService.CreateReply(body);
    }

    @Patch("comment/confirm")
    @UseGuards(AuthGuard)
    ConfirmComments(@Body() body: any): any {
        return this.portfolioService.ConfirmComments(body);
    }

    @Patch("reply/confirm")
    @UseGuards(AuthGuard)
    ConfirmReplies(@Body() body: any): any {
        return this.portfolioService.ConfirmReplies(body);
    }

    @Patch("like")
    CreateLike(@Body() body: any): any {
        return this.portfolioService.CreateLike(body);
    }
}