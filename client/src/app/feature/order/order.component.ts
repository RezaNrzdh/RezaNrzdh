import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../../core/services/orders.service";
import {ResponsiveService} from "../../core/services/responsive.service";
import {OrderModel} from "../../core/models/order.model";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

    data: Array<OrderModel>;
    selectedOrder: number = 0;
    selectedSubOrder: number = 0;

    constructor(private orderService: OrdersService, private responsiveService: ResponsiveService) {}

    ngOnInit(): void {
        this.orderService.getOrders().subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((error: any) => {
                console.log(error);
            })
        });
    }

    SetSelectedOrder(value: number): void{
        this.selectedOrder = value;
        this.selectedSubOrder = 0;
    }

    SetSelectedSubOrder(value: number): void{
        this.selectedSubOrder = value;
    }
}
