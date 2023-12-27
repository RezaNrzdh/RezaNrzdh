import {Controller, Get} from "@nestjs/common";
import {OrdersService} from "../service/orders.service";

@Controller("api/v1/orders")
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @Get()
    GetOrders(): Array<object> {
        return this.ordersService.GetOrders();
    }
}