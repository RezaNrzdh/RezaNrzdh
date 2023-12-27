import {Component, DoCheck, OnInit} from '@angular/core';
import {OrdersService} from "../../core/services/orders.service";
import {ResponsiveService} from "../../core/services/responsive.service";
import {createObject} from "rxjs/internal/util/createObject";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, DoCheck {

    data: any;
    isSmall: boolean = false;
    selectedOrder: number = 0;
    selectedSubOrder: number = 0;

    constructor(private orderService: OrdersService, private responsiveService: ResponsiveService) {}

    ngOnInit(): void {
        this.data = this.orderService.getOrders().subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((error: any) => {
                console.log(error);
            })
        });
    }

    ngDoCheck() {
        this.isSmall = this.responsiveService.getSmall;
    }

    SetSelectedOrder(value: number): void{
        this.selectedOrder = value;
        this.selectedSubOrder = 0;
    }

    SetSelectedSubOrder(value: number): void{
        this.selectedSubOrder = value;
    }
}
