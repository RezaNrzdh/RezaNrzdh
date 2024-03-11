import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register.component";

import {RegisterRoutingModule} from "./register-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    RegisterComponent
]
})
export class RegisterModule { }
