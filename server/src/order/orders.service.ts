import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Order} from "./order.schema";

@Injectable()
export class OrdersService {
    
    constructor(@InjectModel("Order") private orderModel: Model<Order>) {}
    
    async GetOrders(): Promise<any> {
        return await this.orderModel.find().exec();
    }
}