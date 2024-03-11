import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OrderComponent} from "./order.component";
import {OrderRoutingModule} from "./order-routing.module";

@NgModule({
    imports: [
    CommonModule,
    OrderRoutingModule,
    OrderComponent
]
})
export class OrderModule { }
