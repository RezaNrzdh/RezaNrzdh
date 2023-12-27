import {Controller, Get, Param} from "@nestjs/common";
import {PortfolioService} from "../service/portfolio.service";

@Controller("api/v1/portfolio")
export class PortfolioController {
    constructor(private portfolioService: PortfolioService) {}

    @Get()
    GetAllPortfolios(): Array<object> {
        return this.portfolioService.GetAllPortfolios();
    }

    @Get("top/:number")
    GetTopPortfolios(@Param('number') number): Array<object> {
        return this.portfolioService.GetTopPortfolios(number);
    }
}