import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../../core/services/orders.service";
import {ResponsiveService} from "../../core/services/responsive.service";
import {OrderModel} from "../../core/models/order.model";
import { TagComponent } from '../../shared/component/tag/tag.component';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '../../shared/component/button/button.component';
import { IconComponent } from '../../shared/component/icon/icon.component';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    standalone: true,
    imports: [IconComponent, ButtonComponent, NgFor, NgClass, NgIf, TagComponent]
})
export class OrderComponent implements OnInit {

    data: Array<OrderModel>;
    show: boolean = false;
    isLoading: boolean = false;
    selectedOrder: number = 0;
    selectedSubOrder: number = 0;

    constructor(private orderService: OrdersService, private responsiveService: ResponsiveService) {}

    ngOnInit(): void {
        this.orderService.getOrders().subscribe({
            next: ((value: any) => {
                this.data = value;
                this.show = true;
                this.Delay();
            }),
            error: ((error: any) => {
                console.log(error);
            })
        });
    }

    SetSelectedOrder(value: number): void{
        this.Delay();
        this.selectedOrder = value;
        this.selectedSubOrder = 0;
    }

    SetSelectedSubOrder(value: number): void{
        this.Delay();
        this.selectedSubOrder = value;
    }

    Delay() {
        this.isLoading = true;
        const delay = setTimeout(() => {
            this.isLoading = false;
            clearTimeout(delay);
        }, 1000);
    }
}
