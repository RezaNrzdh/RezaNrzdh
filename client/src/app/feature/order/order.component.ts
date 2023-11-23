import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../core/services/orders.service";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

    data: any;
    selectedOrder: number = 0;
    selectedSubOrder: number = 0;

    constructor(private orderService: OrdersService) {}

    ngOnInit(): void {
        this.data = this.orderService.getOrders();
    }

    SetSelectedOrder(value: number): void{
        this.selectedOrder = value;
        this.selectedSubOrder = 0;
    }

    SetSelectedSubOrder(value: number): void{
        this.selectedSubOrder = value;
    }

}
