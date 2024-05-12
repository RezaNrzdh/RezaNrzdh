import {Controller, Get, Res} from "@nestjs/common";
import {DashboardService} from "../service/dashboard.service";

@Controller("api/v1/dashboard")
export class DashboardController {
    constructor(private dashboardService: DashboardService) {}

    @Get("statistics")
    GetStatistics(@Res() res): any {
        return this.dashboardService.GetStatistics(res);
    }
}