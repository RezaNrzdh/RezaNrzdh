import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {SharedModule} from "../../shared/shared.module";
import {ContactRoutingModule} from "./contact-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContactModule { }
