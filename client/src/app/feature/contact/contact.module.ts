import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";

import {ContactRoutingModule} from "./contact-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    ContactComponent
]
})
export class ContactModule { }
